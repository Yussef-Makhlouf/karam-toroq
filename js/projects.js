    // JSON data for projects
    const projects = [
        { id: "category1", title: "إنشاء مباني سكنية", description: "تنفيذ بناء مباني سكنية بأعلى معايير الجودة.", image: "./imags/build- (4).avif", category: "خدمة عظم" },
        { id: "category1", title: "إنشاء مباني تجارية", description: "إنشاء مباني تجارية حديثة وفق التصاميم العالمية.", image: "./imags/tarmem.jpeg", category: "خدمة عظم" },
        { id: "category2", title: "خدمات السباكة", description: "تقديم حلول السباكة الشاملة باستخدام مواد عالية الجودة.", image: "./imags/plumbers.avif", category: "خدمة سباكة" },
        { id: "category3", title: "خدمات الكهرباء", description: "تركيب وصيانة الأنظمة الكهربائية بأحدث المعدات.", image: "./imags/eklectricity.avif", category: "خدمة كهرباء" },
        { id: "category4", title: "ترميم فلل", description: "ترميم الفلل بالكامل بأحدث التصاميم وأفضل المواد.", image: "./imags/build- (2).avif", category: "خدمات التشطيب" },
        { id: "category4", title: "ترميم مباني تجارية", description: "إعادة تأهيل المباني التجارية لضمان أفضل جودة.", image: "./imags/build- (3).avif", category: "خدمات التشطيب" },
        { id: "category4", title: "ترميم مباني سكنية", description: "ترميم المباني السكنية لتحسين الأداء الوظيفي والجمالي.", image: "./imags/build- (1).avif", category: "خدمات التشطيب" },
        { id: "category4", title: "ترميم شقق", description: "تنفيذ ترميم الشقق بمختلف المساحات بما يناسب احتياجات العملاء.", image: "./imags/build- (17).avif", category: "خدمات التشطيب" },
        { id: "category5", title: "زفلتة طرق رئيسية", description: "تنفيذ زفلتة طرق باستخدام المعدات الحديثة.", image: "./imags/build- (21).avif", category: "خدمة زفلتت الطرق" },
        { id: "category6", title: "تركيب شينكو", description: "توفير وتركيب الشينكو لحماية الأراضي.", image: "./imags/build- (14).jpg", category: "خدمات الشبوك" },
        { id: "category6", title: "تركيب شبوك خشبية", description: "تركيب الشبوك الخشبية المناسبة لجميع الاستخدامات.", image: "./imags/build- (15).avif", category: "خدمات الشبوك" },
        { id: "category6", title: "تركيب شبوك حديدية", description: "تركيب الشبوك الحديدية المصنوعة من الألومنيوم.", image: "./imags/shpok1.avif", category: "خدمات الشبوك" },
        { id: "category7", title: "تركيب مظلات باركينج", description: "تنفيذ مظلات البركاينج بأفضل التصاميم.", image: "./imags/build- (28).avif", category: "أعمال المظلات" },
        { id: "category8", title: "إنشاء غرف جاهزة - سندويتش بنل", description: "تصميم وتركيب الغرف الجاهزة باستخدام تقنية سندويتش بنل.", image: "./imags/build- (31).avif", category: "بناء الغرف الجاهزة" }
    ];

    // Generate categories dynamically
    function generateFilters() {
        const filters = document.getElementById("filters");
        const uniqueCategories = [...new Set(projects.map((project) => project.category))];

        uniqueCategories.forEach((category) => {
            const filter = document.createElement("li");
            filter.className = "nav-item";
            filter.innerHTML = `
                <button class="nav-link rounded-pill" onclick="filterProjects('${category}')">${category}</button>
            `;
            filters.appendChild(filter);
        });

        // Add "Show All" button
        const allFilter = document.createElement("li");
        allFilter.className = "nav-item";
        allFilter.innerHTML = `
            <button class="nav-link rounded-pill active" onclick="filterProjects('all')">عرض الكل</button>
        `;
        filters.prepend(allFilter);
    }

    // Render projects dynamically with warranty badge
    function renderProjects(filteredCategory = "all") {
        const container = document.getElementById("projects-container");
        container.innerHTML = ""; // Clear existing content

        projects
            .filter((project) => filteredCategory === "all" || project.category === filteredCategory)
            .forEach((project) => {
                const hasWarranty = project.title !== "زفلتة طرق رئيسية"; // Exclude specific project
                const badgeHTML = hasWarranty ? `<div class="warranty-badge">+10 سنوات ضمان</div>` : "";
                const card = `
                    <div class="col">
                        <div class="card project-card shadow-lg rounded-4 border-0 overflow-hidden">
                            ${badgeHTML}
                            <img src="${project.image}" class="card-img-top img-hover-zoom" alt="${project.category}">
                            <div class="card-body">
                                <h5 class="text-primary fw-bold">${project.title}</h5>
                                <p>${project.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
    }

    // Filter projects by category
    function filterProjects(category) {
        renderProjects(category);

        // Update active class
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => link.classList.remove("active"));
        event.target.classList.add("active");
    }

    // Initialize
    document.addEventListener("DOMContentLoaded", () => {
        generateFilters();
        renderProjects();
    });
    
