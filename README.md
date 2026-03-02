## 🛠️ Technology Stack

| Technology | Implementation | Why I used it |
| :--- | :--- | :--- |
| **HTML5** | Semantic Tags | Used `<article>`, `<section>`, and `<nav>` for SEO and screen-reader accessibility. |
| **CSS3** | Modern Layouts | Leveraged **CSS Grid** for product menus and **Flexbox** for navigation. |
| **JavaScript** | ES6+ Logic | Implemented the **Intersection Observer API** for high-performance scroll triggers. |
| **LocalStorage** | Data Persistence | Used to maintain user preferences and "Saved" items across sessions. |

---

## 🌪️ Scroll Effect & Animation Logic

The website features a "Slide-and-Fade" reveal effect. Instead of using heavy libraries like AOS or GSAP, I implemented this using the native **Intersection Observer API**.



### 1. The Logic
1. **Initial State:** Elements are hidden via CSS (`opacity: 0`) and pushed down slightly (`translateY(30px)`).
2. **Detection:** The JavaScript `Observer` watches each section.
3. **Trigger:** Once a section enters the viewport (20% visibility), the `active` class is injected.
4. **Transition:** CSS handles the smooth transition back to `opacity: 1` and `translateY(0)`.

### 2. Benefits
* **High Performance:** No heavy event listeners on the scroll bar, preventing "jank."
* **Battery Efficient:** Animations only run when needed.
* **Customizable:** Global CSS variables allow for easy timing adjustments.
