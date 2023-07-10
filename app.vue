<template>
  <Html>
    <Head>
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></Script>
    </Head>
    <Body>
      <NuxtLayout>
        <NuxtPage />

        <TailwindIndicator />
        <UNotifications />
      </NuxtLayout>
    </Body>
  </Html>
</template>
