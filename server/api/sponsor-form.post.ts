import { Client } from "@notionhq/client";
import { SelectPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type SponsorForm = {
  name: string;
  category: string;
  email: string;
  helps: SelectPropertyItemObjectResponse[];
  details: string;
};

export default defineEventHandler(async (event) => {
  const { name, category, email, helps, details } = (await readBody(
    event
  )) as SponsorForm;

  const { notionSecret, notionSponsorDatabaseId } = useRuntimeConfig();

  const notion = new Client({ auth: notionSecret });

  try {
    const response = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: notionSponsorDatabaseId,
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
          type: "email",
          email,
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
