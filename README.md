# IT313 Laboratory 6 - React Native Core Components

## Project Title

Student Directory Viewer

## Problem Description

The Student Directory Viewer is a React Native application developed using Expo.

The application allows an academic adviser to browse a list of students who need academic advising. It displays each student's photo, name, and year level.

The application also provides a search function to find students by name and a flagging feature to mark students who need advising.

## Component Structure

### 1. StudentCard.tsx

StudentCard is a reusable functional component responsible for displaying an individual student's information.

It uses:

- View to organize the student card layout.
- Image to display the student's photo.
- Text to display the name and year level.
- Pressable to handle the Flag for Advising interaction.
- StyleSheet to organize the component's design.

It receives student information and flag-related properties through props.

### 2. StudentDirectory.tsx

StudentDirectory is the parent component responsible for managing the student directory.

It uses:

- useState to manage the student list, search query, and flagged student IDs.
- TextInput to accept student name searches.
- ScrollView to display a scrollable list of student cards.
- map() to render the StudentCard component for each student.
- filter() to search for matching student names.

It also contains the toggleFlag function to add or remove students from the flagged list.

### 3. src/app/index.tsx

This is the main application entry screen.

It imports and displays the StudentDirectory component.

## React Native Core Components Applied

- View - Used as a container for organizing screen elements.
- Text - Used to display student information and headings.
- Image - Used to display student photos.
- ScrollView - Used to make the student list scrollable.
- TextInput - Used to accept search input.
- Pressable - Used to handle button interactions.

## How to Run the Application

1. Install Node.js and npm.
2. Open the project folder in VS Code.
3. Install the project dependencies:

   npm install

4. Start the Expo development server:

   npx expo start

5. Scan the QR code using Expo Go or open the application using an Android emulator.

## Expected Features

- Displays five student profiles.
- Shows student photos, names, and year levels.
- Supports scrolling through the student list.
- Searches students by name without case sensitivity.
- Displays a message when no matching student is found.
- Allows advisers to flag and unflag students.
- Updates the flag button appearance based on its state.

## Conclusion

This project demonstrates the use of React Native core components to build a functional student directory. It combines layout, displaying information, scrolling, searching, and touch interaction in one application.
