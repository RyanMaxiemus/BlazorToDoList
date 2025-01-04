# Blazor To-Do List

A simple **Progressive Web Application (PWA)** built using Microsoft's **Blazor WebAssembly** framework. This project demonstrates how to create a To-Do List app with offline support, task persistence using browser storage, and a clean, responsive design.

---

## Features

- **Add, Edit, and Delete Tasks**: Manage your daily tasks with ease.
- **Mark Tasks as Completed**: Track progress with a checkbox for each task.
- **Data Persistence**: Uses browser `localStorage` to save tasks.
- **Offline Support**: Fully functional offline thanks to PWA features.
- **Responsive Design**: Styled for usability across devices.

---

## Prerequisites

Before you begin, ensure you have the following installed:

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [.NET SDK 7.0 or later](https://dotnet.microsoft.com/download)
3. [C# Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/RyanMaxiemus/BlazorToDoList.git
cd BlazorToDoList
```

### 2. Run the Application
```bash
dotnet run
```

Open your browser and navigate to `https://localhost:5001`.

---

## Project Structure

- **wwwroot**: Contains static files like CSS, JS, and the service worker.
- **Pages**: Blazor Razor pages for UI.
- **Program.cs**: Entry point of the application.
- **Service Worker**: Handles offline capabilities for the PWA.

---

## Key Files

- `Pages/ToDoList.razor`: Implements the To-Do List functionality.
- `wwwroot/manifest.json`: Configures the PWA manifest (app name, theme, etc.).
- `wwwroot/service-worker.js`: Enables offline support.

---

## Usage

1. Open the app in your browser.
2. Navigate to the **To-Do List** page.
3. Add tasks by typing in the input box and clicking **Add**.
4. Mark tasks as completed by checking the box next to each task.
5. Delete tasks by clicking the **Delete** button.
6. Refresh the page to see tasks persist (thanks to `localStorage`).

### Installing as a PWA

1. Click "Install" or "Add to Home Screen" in your browser.
2. Use the app as a standalone application.
3. Test offline functionality by disconnecting from the internet.

---

## Customization

- **Styling**: Modify `wwwroot/css/app.css` to customize the app's appearance.
- **Extend Features**:
  - Add task due dates.
  - Filter tasks by status (e.g., show only completed tasks).
  - Enable notifications for overdue tasks.

---

## Technologies Used

- **Blazor WebAssembly**
- **C#**
- **HTML/CSS**
- **JavaScript Interop** (for `localStorage`)
- **PWA Features** (Service Worker, Manifest)

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Special thanks to the Blazor community for creating a fantastic framework for building modern web applications!
