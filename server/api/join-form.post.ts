import { Client } from "@notionhq/client";
import { SelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type JoinForm = {
  name: string;
  category: string;
  email: string;
  github: string;
  helps: SelectPropertyItemObjectResponse[];
  details: string;
};

export default defineEventHandler(async (event) => {
  const { notionSecret, notionJoinDatabaseId } = useRuntimeConfig();
  const notion = new Client({ auth: notionSecret });

  const { name, category, email, github, helps, details } = (await readBody(
    event
  )) as JoinForm;

  try {
    const response = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: notionJoinDatabaseId,
      },
      properties: {
        title: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: name,
              },
            },
          ],
        },
        Tags: {
          type: "select",
          select: {
            name: category,
          },
        },
        Email: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: email,
              },
            },
          ],
        },
        GitHub: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: github,
              },
            },
          ],
        },
        Help: {
          type: "multi_select",
          multi_select: helps,
        },
        Detail: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: details,
              },
            },
          ],
        },
      },
    });

    return {
      id: response.id,
    };
  } catch (e) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "My notion database is not configured correctly. Please contact me via email for the time being.",
    });
  }
});
