# ZoiApp2021

Patient-Doctor Booking System built with the MERN stack

---

## Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Demo](#demo)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
5. [Usage](#usage)  
6. [Architecture](#architecture)  
   - [MVC Pattern](#mvc-pattern)  
   - [Tech Stack](#tech-stack)  
7. [Folder Structure](#folder-structure)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## Overview

ZoiApp2021 is a booking platform that connects patients with specialist doctors in their area.  

Patients can browse available specialists, book appointments, and receive notifications once their booking is confirmed.  

Doctors control their own schedules by specifying available days and time slots, ensuring they manage their patient load effectively.

---

## Features

- Patients browse and filter doctors by specialty and location.  
- Real-time appointment availability based on the doctor’s schedule.  
- Doctors receive instant notifications for new bookings.  
- Role-based authentication: separate dashboards for patients and doctors.  
- CRUD operations for appointments and user profiles.

---

## Demo

_No live demo is available at the moment. The app runs locally on your machine._

Below is a screenshot of the homepage interface:

![Homepage Screenshot](./screenshots/homepage.png)

---

## Getting Started

### Prerequisites

- Node.js v14 or higher  
- npm or Yarn  
- MongoDB running locally (or a MongoDB Atlas URI)  

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/your-org/zoiapp2021.git
   cd zoiapp2021
   ```

2. Install dependencies for both servers  
   ```bash
   # In the root
   npm install

   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```

3. Create a `.env` file in `server/` with at least:  
   ```env
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

---

## Usage

1. Start MongoDB if not already running.  
2. Launch the backend server  
   ```bash
   cd server
   npm run dev
   ```
3. Start the React frontend  
   ```bash
   cd client
   npm start
   ```
4. Open your browser at `http://localhost:3000`

---

## Architecture

### MVC Pattern

- **Models:** Mongoose schemas for Users, Doctors, Appointments  
- **Views:** React components handling routes, state, and UI  
- **Controllers:** Express route handlers encapsulating business logic  

### Tech Stack

| Layer       | Technology            |
| ----------- | --------------------- |
| Frontend    | React, React Router   |
| Backend     | Node.js, Express      |
| Database    | MongoDB, Mongoose     |
| Authentication | JWT               |
| State Mgmt  | React Context / Hooks |

---

## Folder Structure

```
zoiapp2021/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── services/
├── server/                 # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
└── .env
```

---

## Contributing

We welcome your contributions! Please follow these steps:

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request on GitHub  

### Current Contributors

- [Jeremiah1582](https://github.com/Jeremiah1582)  
- [ashikkhandani](https://github.com/ashikkhandani)  
- [whiteroach](https://github.com/whiteroach)  
- [camposCode](https://github.com/camposCode)  

---

## License

This project is licensed under the MIT License. 
