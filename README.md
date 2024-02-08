# Orders 🍔

This is a simple app that allows you to make orders that get formatted and sent to an Whatsapp number. You can also filter orders by their category.

## Tech Stack 💻

This app was built using the following technologies:

- [Expo](https://expo.dev/): A platform for making universal native apps for Android, iOS, and the web with JavaScript and React. ()
- [React Native](https://reactnative.dev/): A framework for building native apps using React. ()
- [Nativewind](https://www.nativewind.dev/): A utility-first CSS framework for React Native.
- [Zustand](https://github.com/pmndrs/zustand): A small, fast and scalable bearbones state-management solution.
- [AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage/): An asynchronous, persistent, key-value storage system for React Native.

## Installation 🛠️

To run this app, you need to have Bun (or Node.js) and Expo CLI installed on your machine. Then, follow these steps:

1. Clone this repo: `git clone https://github.com/RogerioPiatek/orders.git`
2. Navigate to the project folder: `cd orders`
3. Install the dependencies: `bun install` or `npm install`
4. Start the app: `bunx expo start` or `npx expo start`
5. Scan the QR code with the Expo Go app on your phone or use a simulator.

## Usage 📱

The app has three screens: The list of products, the product itself and the cart.

- On the list of products, you can navigate between their categories, and click to get to a more detailed product page.
- On the product page you can read the description, see a cover photo and click to add to the cart.
- On the cart you can input your address and it'll be formatted and sent to an Whatsapp number. 

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.
