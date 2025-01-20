// import { NextIntlClientProvider } from 'next-intl';
// import { useRouter } from 'next/router';
// import messages_en from '../locales/en.json'; // Import your translations
// import messages_fr from '../locales/fr.json'; // Import other language translations if needed

// // This function returns the correct messages based on the locale.
// const getMessages = (locale) => {
//   switch (locale) {
//     case 'en':
//       return messages_en;
//     case 'fr':
//       return messages_fr;
//     default:
//       return messages_en;
//   }
// };

// function MyApp({ Component, pageProps }) {
//   const { locale } = useRouter();

//   return (
//     <NextIntlClientProvider
//       messages={getMessages(locale)} // Provide the right set of messages for the current locale
//       locale={locale}
//     >
//       <Component {...pageProps} />
//     </NextIntlClientProvider>
//   );
// }

// export default MyApp;
