const name = "SoulMate";
        document.getElementById("username").textContent = name;

      const hour = new Date().getHours();
      const greet =
        hour < 12
          ? `🌞 Good Morning, ${name}!`
          : hour < 18
          ? `🌤️ Good Afternoon, ${name}!`
          : `🌙 Good Evening, ${name}!`;
      document.getElementById("greetingText").textContent = greet;

      const quotes = [
        "Every storm runs out of rain 🌈",
        "Progress, not perfection 🛤️",
        "You are more than your thoughts 🌻",
        "One step at a time is all it takes 👣",
        "Your feelings are valid 💖",
        "Pause. Breathe. Reflect. 🧘",
        "Your story matters 📖",
        "Healing isn’t linear 🌱",
        "It's okay to rest ⛅",
        "You’re doing your best — and that’s enough 💛",
      ];
      document.getElementById("quote").textContent = `${
        quotes[Math.floor(Math.random() * quotes.length)]
      }`;

      document.getElementById(
        "calendar"
      ).textContent = `📅 ${new Date().toDateString()}`;

      const root = document.documentElement;
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      function applyTheme(mode) {
        root.setAttribute("data-theme", mode);
        localStorage.setItem("theme", mode);
      }
      function toggleTheme() {
        applyTheme(
          root.getAttribute("data-theme") === "dark" ? "light" : "dark"
        );
      }
      window.onload = () => {
        applyTheme(
          localStorage.getItem("theme") || (prefersDark ? "dark" : "light")
        );
      };

      tsParticles.load("tsparticles", {
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: "#a0c4ff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.3,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: { min: 4, max: 8 },
            anim: { enable: true, speed: 2, size_min: 2, sync: false },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "top",
            random: true,
            straight: false,
            outModes: "out",
          },
        },
      });
      function navigate(a) {
        window.location.href = `${a}.html`;  // Redirects to the provided page (e.g., "a.html")
      }
      