/*
  EDIT YOUR INTERNSHIPS HERE.
  Replace each applyUrl with that internship's Google Form URL.
  If all roles use one Google Form, use the same URL for each role.
*/
const internships = [
  { id: "01", title: "Java Development Intern", category: "Development", duration: " UPTO 4 weeks", mode: "Remote / Online", level: "Students & Freshers", skills: "Java, OOP, SQL", description: "Build a strong foundation in Java development and explore practical software development concepts.", applyUrl: "https://forms.gle/Ym9zvBC4hAhYNMVJ7" },
  { id: "02", title: "Python Development Intern", category: "Development", duration: "UPTO 2 Months", mode: "Remote / Online", level: "Students & Freshers", skills: "Python, Programming", description: "Strengthen your programming fundamentals and learn how Python is used to solve real-world problems.", applyUrl: "https://forms.gle/Ym9zvBC4hAhYNMVJ7" },
  { id: "03", title: "Web Development Intern", category: "Development", duration: " UPTO 3 Months", mode: "Remote / Online", level: "Students & Freshers", skills: "HTML, CSS, JavaScript", description: "Learn to create responsive websites and understand the building blocks of the modern web.", applyUrl: "https://forms.gle/Ym9zvBC4hAhYNMVJ7" },
  { id: "04", title: "UI/UX Design Intern", category: "Design", duration: " UPTO 2 Months", mode: "Remote / Online", level: "Students & Freshers", skills: "Wireframes, UI Design", description: "Explore user-centred design, wireframing and the process of creating clear digital experiences.", applyUrl: "https://forms.gle/Ym9zvBC4hAhYNMVJ7" },
  { id: "05", title: "Data Analytics Intern", category: "Data", duration: " UPTO 3 Months", mode: "Remote / Online", level: "Students & Freshers", skills: "Excel, SQL, Python", description: "Discover how data can be organised, analysed and communicated to support better decisions.", applyUrl: "https://forms.gle/Ym9zvBC4hAhYNMVJ7" },
  { id: "06", title: "Digital Marketing Intern", category: "Other", duration: " UPTO 2 Months", mode: "Remote / Online", level: "Students & Freshers", skills: "SEO, Content, Social Media", description: "Learn the fundamentals of online marketing, content planning and digital audience engagement.", applyUrl: "https://forms.gle/Ym9zvBC4hAhYNMVJ7" }
];

const grid = document.getElementById("internshipGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const modal = document.getElementById("internshipModal");
let activeFilter = "All";

function renderInternships() {
  const term = searchInput.value.trim().toLowerCase();
  const visible = internships.filter(item => {
    const matchesFilter = activeFilter === "All" || item.category === activeFilter;
    const matchesSearch = `${item.title} ${item.category} ${item.skills}`.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });
  grid.innerHTML = visible.length ? visible.map(item => `
    <article class="internship-card">
      <div class="card-top"><span class="card-number">ROLE / ${item.id}</span><span class="card-tag">${item.category}</span></div>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.description)}</p>
      <div class="card-meta"><span>◷ ${escapeHTML(item.duration)}</span><span>⌖ ${escapeHTML(item.mode)}</span></div>
      <div class="card-footer"><span>VIEW OPPORTUNITY</span><button type="button" data-details="${item.id}">Explore <span>↗</span></button></div>
    </article>`).join("") : `<div class="empty-state">No internships found. Try another search.</div>`;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[char]));
}
function openDetails(id) {
  const item = internships.find(role => role.id === id);
  if (!item) return;
  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalDetails").innerHTML = `
    <p class="modal-description">${escapeHTML(item.description)}</p>
    <div class="detail-list">
      <div class="detail-item"><small>Duration</small><strong>${escapeHTML(item.duration)}</strong></div>
      <div class="detail-item"><small>Work mode</small><strong>${escapeHTML(item.mode)}</strong></div>
      <div class="detail-item"><small>Eligibility</small><strong>${escapeHTML(item.level)}</strong></div>
      <div class="detail-item"><small>Skills</small><strong>${escapeHTML(item.skills)}</strong></div>
    </div>`;
  const apply = document.getElementById("modalApply");
  const validUrl = item.applyUrl && item.applyUrl !== "ADD_GOOGLE_FORM_URL_HERE";
  apply.href = validUrl ? item.applyUrl : "mailto:onefour.ispl@gmail.com?subject=" + encodeURIComponent("Google Form link needed - " + item.title);
  apply.innerHTML = validUrl ? 'Apply for this internship <span>↗</span>' : 'Request application link <span>↗</span>';
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
grid.addEventListener("click", event => {
  const button = event.target.closest("[data-details]");
  if (button) openDetails(button.dataset.details);
});
filters.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  filters.querySelectorAll(".filter").forEach(el => el.classList.toggle("active", el === button));
  renderInternships();
});
searchInput.addEventListener("input", renderInternships);
modal.addEventListener("click", event => { if (event.target.hasAttribute("data-close")) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderInternships();
