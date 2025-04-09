# ☀️ ReactCast — Weather app!
Welcome to **ReactCast**, the React Native weather app 🌧️🌤️☁️

---

## ✨ Features

- 🔍 **Live City Search** with autocomplete from the OpenWeatherMap API
- 📍 **Persisted Weather Location** saved across sessions
- 🌡️ **Current Weather Data** including temperature, condition, highs/lows
- 🌎 **Global City Support** — search anywhere in the world!
- 🧠 **Smart State Management** with `useEffect` + `AsyncStorage`
- 💥 **Instant Load** with splash screen and onboarding logic

---

## ⚙️ Technologies Used

| Tool                      | Purpose                            |
|---------------------------|------------------------------------|
| ⚛️ React Native (Expo)     | Core mobile app framework          |
| 📦 Axios                   | Fetching weather and search data  |
| 🌍 OpenWeatherMap API      | Real-time weather + geolocation    |
| 💾 AsyncStorage            | Persisting selected city locally   |
| 🧭 Expo Router             | Navigation between screens         |
| 🎨 Figma                   | UI design + layout inspiration     |
| 🔠 TypeScript              | Type safety for sanity             |
| 🎭 Lottie (optional)       | Animated splash screen             |

---

## 🛠️ How to Run Locally

```bash
git clone https://github.com/your-username/reactcast
cd reactcast
npm install
npx expo start
```

> Make sure to add your API key to `.env`:

```
OPENWEATHER_API_KEY=your_key_here
```

---

## 🚀 Deployment

ReactCast is built with [Expo](https://expo.dev), so you can deploy it easily using [EAS (Expo Application Services)](https://docs.expo.dev/eas/).

### Build for iOS or Android

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform ios
eas build --platform android
```

You’ll get a downloadable `.apk` or `.ipa` to install or submit to the stores.

---

## 📸 Screenshots

| Home Screen | Search City | Weather Details |
|-------------|-------------|-----------------|
| <img width="218" alt="Screenshot 2025-04-09 at 16 26 48" src="https://github.com/user-attachments/assets/3cd0fe9e-50be-4f1c-bb79-e6f716d7c1d5" /> | <img width="218" alt="Screenshot 2025-04-09 at 16 27 08" src="https://github.com/user-attachments/assets/f43825a8-6b3f-4a86-8108-9318e2acfa4e" /> | <img width="218" alt="Screenshot 2025-04-09 at 16 26 51" src="https://github.com/user-attachments/assets/f0734306-82e6-49c1-8252-0029fd2f26c7" /> |

---

Made with ❤️ by @michellehorn
