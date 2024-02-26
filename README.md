# Health-Vault

The Health-Vault is a web application designed to store and manage health records of patients. It provides a secure and centralized platform for hospitals to record and manage health information, ensuring data integrity and confidentiality.

## Overview

This system enables hospitals to securely store and access health records based on patients' Aadhar numbers. Only authorized hospital personnel have the privilege to add health records to the system, preventing unauthorized users from adding fake records. This ensures the authenticity and accuracy of the health information stored in the system, contributing to better patient care and management.

## Features

- **Secure Access:** The system ensures secure access to health records, allowing only authorized hospital personnel to add and manage records.
  
- **Patient Authentication:** Patients are authenticated based on their Aadhar numbers, ensuring that only legitimate patients' records are stored in the system.

- **Data Integrity:** By restricting user access and implementing authentication mechanisms, the system maintains data integrity and prevents unauthorized modifications to health records.

- **Centralized Storage:** Health records are stored in a centralized database, enabling easy retrieval and management of patient information.

## Technology Stack

- **Frontend:** React.js
- **Backend:** Node.js, MongoDB
- **SMS Authentication:** Twilio

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

    Install individual dependencies as needed by running the respective `npm install` commands for each dependency listed in `package.json`.

## Usage

To run the project locally, you can use the following commands:

- **Development mode:**

    ```bash
    npm run dev
    ```

- **Build:**

    ```bash
    npm run build
    ```

- **Linting:**

    ```bash
    npm run lint
    ```

- **Preview:**

    ```bash
    npm run preview
    ```

## Dependencies

List of project dependencies can be found in `package.json`.

## Development Dependencies

To install development dependencies, you can run:

```bash
npm install --save-dev
