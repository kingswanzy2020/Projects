// epicreads_contactus/index.mjs
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";

const REGION = process.env.AWS_REGION || "us-east-1";
const TABLE_NAME = process.env.TABLE_NAME || "ContactMessages";
const RECEIVER = process.env.RECEIVER_EMAIL;
const SENDER = process.env.SENDER_EMAIL;

const ses = new SESClient({ region: REGION });
const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: REGION }));

export const handler = async (event) => {
    const { name, email } = JSON.parse(event.body);
    const id = randomUUID();
    const timestamp = new Date().toISOString();

    // 1. Send email notification
    await ses.send(new SendEmailCommand({
        Source: SENDER,
        Destination: { ToAddresses: [RECEIVER] },
        Message: {
            Subject: { Data: `Website Query Form: ${name}` },
            Body: {
                Text: { Data: `Full Name: ${name}\nEmail: ${email}\nID: ${id}\nTime: ${timestamp}` }
            }
        }
    }));

    // 2. Store lead in DynamoDB
    await dynamo.send(new PutCommand({
        TableName: TABLE_NAME,
        Item: { id, name, email, timestamp }
    }));

    return {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ message: "Success" })
    };
};