
/* =========================================
   ST. XAVIER'S HIGH SCHOOL
   COMPLETE UPDATED JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================
       1. MOBILE NAVIGATION
    ================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        function closeMenu() {
            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        }

        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.textContent = isOpen ? "✕" : "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

        });

        // Close menu when a navigation link is clicked
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", closeMenu);

        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {

            if (
                navLinks.classList.contains("active") &&
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }

        });

        // Close menu using Escape
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeMenu();
            }

        });

        // Close menu on desktop screen size
        window.addEventListener("resize", function () {

            if (window.innerWidth > 1050) {
                closeMenu();
            }

        });

    }


    /* =================================
       2. FOOTER COPYRIGHT YEAR
    ================================= */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }


    /* =================================
       3. CONTACT FORM
       DEMONSTRATION ONLY
    ================================= */

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            formMessage.textContent =
                "This is a demonstration form. Please connect a backend or form service to receive enquiries.";

            contactForm.reset();

        });

    }


    /* =================================
       4. APPLICATION FORM
       DEMONSTRATION ONLY
    ================================= */

    const applicationForm =
        document.getElementById("applicationForm");

    const applicationMessage =
        document.getElementById("applicationMessageStatus");

    if (applicationForm && applicationMessage) {

        applicationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            applicationMessage.textContent =
                "This is a demonstration application form. Connect a backend or form service to receive submissions.";

            applicationForm.reset();

        });

    }


    /* =================================
       5. LOGIN / SIGN UP POPUP
    ================================= */

    const authOverlay = document.getElementById("authOverlay");
    const openAuth = document.getElementById("openAuth");
    const closeAuth = document.getElementById("closeAuth");

    const loginTab = document.getElementById("loginTab");
    const signupTab = document.getElementById("signupTab");

    const authForm = document.getElementById("authForm");

    const authTitle = document.getElementById("authTitle");
    const authSubtitle = document.getElementById("authSubtitle");
    const authSubmit = document.getElementById("authSubmit");
    const authMessage = document.getElementById("authMessage");

    const nameField = document.getElementById("nameField");
    const confirmField = document.getElementById("confirmField");

    const authName = document.getElementById("authName");
    const authPassword = document.getElementById("authPassword");
    const authConfirm = document.getElementById("authConfirm");


    // Check whether popup exists on this page
    if (authOverlay && openAuth) {


        /* OPEN POPUP */

        openAuth.addEventListener("click", function () {

            authOverlay.classList.add("show");

            setAuthMode("login");

        });


        /* CLOSE POPUP */

        function closeLoginPopup() {

            authOverlay.classList.remove("show");

            if (authForm) {
                authForm.reset();
            }

        }


        if (closeAuth) {

            closeAuth.addEventListener("click", closeLoginPopup);

        }


        /* SWITCH LOGIN AND SIGN UP */

        function setAuthMode(mode) {

            if (!authForm) return;

            authForm.reset();

            if (authMessage) {
                authMessage.textContent = "";
            }

            const isSignup = mode === "signup";

            if (nameField) {
                nameField.hidden = !isSignup;
            }

            if (confirmField) {
                confirmField.hidden = !isSignup;
            }

            if (authName) {
                authName.required = isSignup;
            }

            if (authConfirm) {
                authConfirm.required = isSignup;
            }

            if (loginTab) {
                loginTab.classList.toggle("active", !isSignup);
            }

            if (signupTab) {
                signupTab.classList.toggle("active", isSignup);
            }

            if (authTitle) {

                authTitle.textContent = isSignup
                    ? "Create Your Account"
                    : "Welcome Back";

            }

            if (authSubtitle) {

                authSubtitle.textContent = isSignup
                    ? "Join the St. Xavier's school community."
                    : "Login to continue to your account.";

            }

            if (authSubmit) {

                authSubmit.textContent = isSignup
                    ? "Create Account"
                    : "Login";

            }

            authForm.dataset.mode = mode;

        }


        /* LOGIN TAB */

        if (loginTab) {

            loginTab.addEventListener("click", function () {

                setAuthMode("login");

            });

        }


        /* SIGN UP TAB */

        if (signupTab) {

            signupTab.addEventListener("click", function () {

                setAuthMode("signup");

            });

        }


        /* CLOSE WHEN CLICKING OUTSIDE */

        authOverlay.addEventListener("click", function (event) {

            if (event.target === authOverlay) {

                closeLoginPopup();

            }

        });


        /* CLOSE USING ESCAPE KEY */

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                authOverlay.classList.contains("show")
            ) {

                closeLoginPopup();

            }

        });


        /* FORM SUBMISSION - DEMO */

        if (authForm) {

            authForm.addEventListener("submit", function (event) {

                event.preventDefault();

                if (authForm.dataset.mode === "signup") {

                    // Check password match
                    if (authPassword.value !== authConfirm.value) {

                        authMessage.textContent =
                            "Passwords do not match. Please try again.";

                        return;

                    }

                    authMessage.textContent =
                        "Demo sign-up successful! No account has been created.";

                } else {

                    authMessage.textContent =
                        "This is a demo login. Real authentication is not connected.";

                }

            });

        }

    }

});
