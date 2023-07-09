<template>
  <main>
    <section class="h-screen flex items-center justify-center">
      <div
        class="prose dark:prose-invert text-center [&>*]:mx-auto prose-sm md:prose-base lg:prose-lg xl:prose-xl lg:max-w-4xl"
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
        <UButton
          to="#motivation"
          size="xl"
          label="Learn more"
          class="no-underline"
        />
      </div>
    </section>
    <section id="motivation" class="h-screen flex items-center justify-center">
      <div
        class="prose dark:prose-invert text-center [&>*]:mx-auto prose-sm md:prose-base lg:prose-lg xl:prose-xl lg:max-w-4xl"
      >
        <h2>Motivation</h2>
      </div>
    </section>
    <section id="features" class="h-screen flex items-center justify-center">
      <div
        class="prose dark:prose-invert text-center [&>*]:mx-auto prose-sm md:prose-base lg:prose-lg xl:prose-xl lg:max-w-4xl"
      >
        <h2>Features</h2>
      </div>
    </section>
    <section id="pricing" class="h-screen flex items-center justify-center">
      <div
        class="prose dark:prose-invert text-center [&>*]:mx-auto prose-sm md:prose-base lg:prose-lg xl:prose-xl lg:max-w-4xl"
      >
        <h2>Pricing</h2>
        <p>
          Although I don't plan to monetize this project, Markit is open to
          affiliate partnerships and sponsors.
        </p>
        <p>
          If your product or service is relevant to the audience of Markit, such
          as a landing-page builder, an email marketing tool, or any other
          product that helps solopreneurs to build and grow their business,
          please feel free to contact me via
          <LazyClickToCopy label="my email" source="quatton@skiff.com" /> or
          submit the form below.
        </p>
        <PopformSponsor />
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style></style>
