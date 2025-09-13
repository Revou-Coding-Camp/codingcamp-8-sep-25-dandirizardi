document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('nameModal');
            const form = document.getElementById('nameForm');
            const input = document.getElementById('userNameInput');
            const greeting = document.getElementById('greeting');

            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';

            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = input.value.trim();
                if (name) {
                    greeting.textContent = `Hii 👋 ${name}`;
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
});

// Data project
const projects = [
  {
    title: "Expert System",
    image: "assets/ProjectExpertSystem.png",
    description: "Expert system for diagnosing cat diseases using the forward chaining method, built using HTML, CSS, Javascript, Bootstrap, native PHP, with three user roles: admin, doctor, and user."
  },
  {
    title: "Lorem Ipsum",
    image: "assets/lorem.svg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Lorem Ipsum",
    image: "assets/lorem.svg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Lorem Ipsum",
    image: "assets/lorem.svg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Lorem Ipsum",
    image: "assets/lorem.svg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Lorem Ipsum",
    image: "assets/lorem.svg",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

// Fungsi render
function renderProjects() {
    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.className =
            "project-item bg-gray-700 rounded-lg shadow p-4 hover:shadow-xl transition text-center hover:bg-gray-600 hover:bg-opacity-80";

        projectItem.innerHTML = `
            <div class="w-full h-48 mb-3 overflow-hidden rounded border-1 border-violet-600">
                <img src="${project.image}" alt="${project.title}"
                         class="w-full h-full object-cover">
            </div>
            <h3 class="text-lg font-bold mb-1 bg-gray-200 rounded px-2 py-1 inline-block" style="color: #7c3aed;">
                ${project.title}
            </h3>
            <p class="text-sm text-white">${project.description}</p>
        `;

        projectList.appendChild(projectItem);
    });
}

const tools = [

            {
                name: "JavaScript",
                image: "assets/js.png",
                language: "Programming",
            },
            {
                name: "React JS",
                image: "assets/reactjs.png",
                language: "JavaScript Library",
            },
            {
                name: "Tailwind",
                image: "assets/tailwind.png",
                language: "CSS Framework",
            },
            {
                name: "Github",
                image: "assets/github.png",
                language: "Version Control",
            },
            {
                name: "VS Code",
                image: "assets/vscode.png",
                language: "Code Editor",
            },
            {
                name: "Bootstrap",
                image: "assets/bootstrap.png",
                language: "Design App",
            },
            {
                name: "Canva",
                image: "assets/canva.png",
                language: "Design App",
            }
        ];

        const toolsList = document.getElementById('tools-list');
        tools.forEach(tool => {
            const div = document.createElement('div');
            div.className = "tool-item bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-600 transition flex flex-col items-center w-32";
            div.innerHTML = `
                <img src="${tool.image}" alt="${tool.name}" class="w-10 h-10 mb-2">
                <span class="font-semibold">${tool.name}</span>
                <span class="text-xs text-gray-300">${tool.language}</span>
            `;
            toolsList.appendChild(div);
        });


   document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
            const result = document.getElementById('contactResult');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                // Simple validation
                const name = form.name.value.trim();
                const email = form.email.value.trim();
                const message = form.message.value.trim();
                if (!name || !email || !message) {
                result.textContent = 'Please fill in all fields.';
                result.classList.add('text-red-600');
                return;
                }
                // Show values
                result.classList.remove('text-red-600');
                result.innerHTML = `
                <div class="tool-item bg-gray-700 text-white px-4 py-2 rounded shadow flex flex-col items-center w-64 mx-auto mt-4">
                    <span class="font-semibold text-lg mb-2">Submitted Data</span>
                    <div class="text-left w-full">
                        <div><span class="font-semibold">Name:</span> ${name}</div>
                        <div><span class="font-semibold">Email:</span> ${email}</div>
                        <div><span class="font-semibold">Message:</span> ${message}</div>
                    </div>
                </div>
                `;
                form.reset();
            });
            });


const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
menu.classList.toggle("hidden");
});

// Render setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});

