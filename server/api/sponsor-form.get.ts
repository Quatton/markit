import { Client } from "@notionhq/client";

export default defineEventHandler(async (_event) => {
  const { notionSecret, notionDatabaseId } = useRuntimeConfig();

  const notion = new Client({ auth: notionSecret });

  const response = await notion.databases.retrieve({
    database_id: notionDatabaseId,
  });

  if (
    response.properties.Tags.type !== "select" ||
    response.properties.Help.type !== "multi_select"
  ) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "My notion database is not configured correctly. Please contact me via email for the time being.",
    });
  }

  const tags = response.properties.Tags.select.options;

  const helps = response.properties.Help.multi_select.options;

  return {
    tags,
    helps,
  };
});
