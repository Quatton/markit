<script setup>
  const { socials } = useAppConfig();
</script>

<template>
  <main class="flex flex-col">
    <section class="flex h-screen flex-col items-center justify-center">
      <div
        class="prose prose-sm text-center dark:prose-invert md:prose-base lg:prose-lg xl:prose-xl lg:max-w-4xl [&>*]:mx-auto"
      >
        <h1>
          Building a software product<br />
          but not sure how to sell?
        </h1>
        <h3 class="max-w-xl">
          Markit is interactive tutorial for solopreneurs that will help you
          validate your idea and build a marketing strategy
          <br /><strong class="text-primary-500">
            from pre-sale to post-launch.
          </strong>
        </h3>
        <p>Open-source and 100% free.</p>
        <span class="mx-auto space-x-2">
          <UButton
            to="#motivation"
            size="xl"
            variant="outline"
            label="Learn more"
            class="no-underline"
          />
          <PopformSponsor />
        </span>
      </div>
    </section>
    <section
      id="motivation"
      class="flex h-screen flex-col items-center justify-center"
    >
      <div class="prose prose-sm text-center dark:prose-invert [&>*]:mx-auto">
        <h2>Motivation</h2>
        <p>
          Being a solopreneur is hard. You have to do everything yourself: from
          building a product to marketing and selling it. There are a lot of
          things to do and it's easy to get overwhelmed.
        </p>

        <p>
          One day, I encountered this tweet from
          <a
            href="https://twitter.com/quattonbud/status/1677043871619100677"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dan Kulkov
          </a>
          and I got inspired to build a tool around it.
        </p>

        <p>
          Markit is basically a word-play on "market" and "kit". It's short and
          catchy, and I really love it! I'm building Markit for myself and for
          other developers, so it might not be directly applicable to other
          types of product. Markit is designed to be minimal and simple, so it's
          not a replacement for a full-blown marketing course. (So if you want
          to sponsor by promoting your marketing course or service here, feel
          free to!)
        </p>

        <p>
          I'm by no means an expert in marketing, but I'm learning and I want to
          share my knowledge with others.
        </p>
      </div>
    </section>
    <section
      id="features"
      class="flex h-screen flex-col items-center justify-center gap-4"
    >
      <div class="prose prose-sm text-center dark:prose-invert [&>*]:mx-auto">
        <h2>Features</h2>
      </div>
      <div
        class="grid grid-rows-3 gap-2 lg:grid-cols-3 lg:grid-rows-1 text-sm lg:text-base"
      >
        <UCard>
          <template #header>📚 Interactive tutorial</template> A step-by-step
          sets of forms that will guide you through the process of building a
          marketing strategy for your product. You can evaluate your idea and
          make decisions based on your answers.
        </UCard>
        <UCard>
          <template #header>🗨️ Auto-generated ChatGPT prompts</template> You are
          not building alone! Markit will generate ChatGPT prompts for you to
          help you write your copy or to get feedback on your idea. It's not
          going to be perfect, but we will keep improving the prompt quality
          over time.
        </UCard>
        <UCard>
          <template #header>🧩 Integrations</template>Markit will seamlessly
          integrate with other tools by our sponsors. For example, if you are
          using ChatGPT Mega-Prompts by
          <UButton variant="link" to="https://makerbox.club/" :padded="false">
            MakerBox
          </UButton>
          , Markit will automicatically help you personalize the prompts for
          your product in a few clicks.
        </UCard>
      </div>
    </section>
    <section
      id="pricing"
      class="flex h-screen flex-col items-center justify-center"
    >
      <div class="prose prose-sm text-center dark:prose-invert [&>*]:mx-auto">
        <h2>Pricing</h2>
        <p>
          (Credits to
          <UButton
            :padded="false"
            to="https://orm.drizzle.team/#pricing"
            variant="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Drizzle ORM
          </UButton>
          for this fun joke. 😆)
        </p>
        <p>
          As I mentioned before, Markit is
          <strong>100% free and open-source</strong>. I don't plan to monetize
          it in any way. However, I'm open to affiliate partnerships and
          sponsors.
        </p>
        <p>
          If your product or service is relevant to the audience of Markit, such
          as a landing-page builder, an email marketing tool, or any other
          product that helps solopreneurs to build and grow their business,
          please feel free to contact me via
          <LazyClickToCopy label="my email" :source="socials.email" />, Twitter
          <UButton
            :padded="false"
            variant="link"
            :to="socials.twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            @quattonbud
          </UButton>
          , or submit a form below.
        </p>
        <PopformSponsor />
      </div>
    </section>
  </main>
</template>
