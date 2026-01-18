document.querySelectorAll(".miliquid-glass").forEach(el => {
    const lens = el.querySelector("::before"); // не используется напрямую

    el.addEventListener("mousemove", e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
        el.style.setProperty("--opacity", 1);
    });

    el.addEventListener("mouseleave", () => {
        el.style.setProperty("--opacity", 0);
    });
});
