const storedTheme = localStorage.getItem("darkTheme");

if (storedTheme !== null) {
    if (storedTheme === "true") {
        document.documentElement.classList.add("dark");
    }
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
}

document.getElementById("toggleTheme").addEventListener("click",() => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("darkTheme", "false");
    } else {
        html.classList.add("dark");
        localStorage.setItem("darkTheme", "true");
    }
})

window.addEventListener('paste', ({ clipboardData: { items } }) => {
    for (const item of items) {
        if (item.type.includes('image')) {
            const blob = item.getAsFile();
        }

        if (item.type === 'text/plain') {
            item.getAsString((text) => {
                console.log(text);
            });
        }
    }
});