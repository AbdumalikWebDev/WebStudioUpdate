"use strict";
import "/style.css";
import "/media.css";

document.querySelector("#app").innerHTML = `
      <div class="darker-overlay"></div>
      <nav id="nav">
        <div class="nav-container container">
          <div class="nav-left">
            <a
              href="/index.html"
              role="directory"
              tabindex="0"
              aria-label="web studio logo">
              <p class="logo"><span class="color-blue">Web</span>Studio</p>
            </a>
            <a href="index.html" class="link" role="directory" tabindex="0">
              Студия
            </a>
            <a href="/portfolio/index.html" class="link" role="directory" tabindex="0">
              Портфолио
            </a>
            <a href="#" class="link" tabindex="0" role="directory">
              Контакты
            </a>
          </div>
          <div class="nav-right">
            <button
              aria-label="наша электронная почта"
              tabindex="0"
              class="send-email-btn link">
              <i class="fa-regular fa-envelope"></i> info@devstudio.com
            </button>
            <a
              href="#"
              class="color-gray number link"
              aria-label="Our Phone Number:"
              tabindex="0">
              <i class="fa-solid fa-phone"></i> +38 096 111 11 11
            </a>
            <i class="fa-solid fa-bars bars"></i>
          </div>
        </div>
      </nav>
      <div class="sidebar">
        <i class="fa-solid fa-xmark close-sidebar"></i>
        <ul>
          <li><a href="index.html" tabindex="0" role="directory">Студия</a></li>
          <li>
            <a href="/portfolio/index.html" tabindex="0" role="directory">Портфолио</a>
          </li>
          <li><a href="" tabindex="0" role="directory">Контакты</a></li>
        </ul>
        <div class="sidebar-bottom">
          <div class="tel-and-mail">
            <a href="telto:+38 096 111 11 11" class="number" tabindex="0"
              >+38 096 111 11 11</a
            >
            <button
              aria-label="Our email"
              tabindex="0"
              class="send-email-btn link">
              <i class="fa-regular fa-envelope"></i> info@devstudio.com
            </button>
          </div>
          <div class="sidebar-footer">
            <a href="#" class="instagram" tabindex="0">Instagram</a>
            <a href="#" class="twitter" tabindex="0">Twitter</a>
            <a href="#" class="facebook" tabindex="0">Facebook</a>
            <a href="#" class="linkedIn" tabindex="0">LinkedIn</a>
          </div>
        </div>
      </div>
      <div class="email-form">
        <button id="close-email-form" tabindex="0">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <form action="index.html" class="form-container" method="POST">
          <span class="title" tabindex="0" role="heading"
            >Оставьте свои данные, мы вам перезвоним</span
          >
          <div class="name-input_box">
            <label for="email-form_name">Имя</label>
            <input
              type="text"
              id="email-form_name"
              class="form-input"
              name="Имя"
              required />
          </div>
          <div class="number-input_box">
            <label for="email-form_number">Телефон</label>
            <input
              type="tel"
              name="Телефон"
              id="email-form_number"
              class="form-input"
              required />
          </div>
          <div class="email-input_box">
            <label for="email-form_email">Почта</label>
            <input
              type="email"
              id="email-form_email"
              class="form-input"
              name="Почта"
              required />
          </div>
          <div class="comment-box">
            <label for="form-comment">Комментарий</label>
            <textarea
              name="Комментарий"
              id="form-comment"
              minlength="20"
              maxlength="300"
              placeholder="Введите текст"></textarea>
          </div>
          <div class="accept-terms_box">
            <input
              type="checkbox"
              name="accept the Terms of the Agreement"
              id="accept-terms" />
            <span class="text">
              Соглашаюсь с рассылкой и принимаю
              <input
                type="button"
                value="Условия договора"
                class="color-blue"
                id="terms" />
            </span>
          </div>
          <input
            type="submit"
            value="Отправыть"
            id="email-form_send"
            tabindex="0" />
        </form>
      </div>
      <main id="main">
        <section class="main_content">
          <div class="darker-layer"></div>
          <div class="container">
            <h1 class="heading1" role="heading" tabindex="0">
              Эффективные решения <br />для вашего бизнеса
            </h1>
            <a href="#" tabindex="0">
              <button class="main-order-btn">Заказать услугу</button>
            </a>
          </div>
        </section>
        <article class="descriptions-sc">
          <div class="container">
            <div class="description1 description" role="article">
              <div class="description-img-box">
                <img src="/assets/description1.svg" alt="svg icon" />
              </div>
              <span class="bold" role="text" tabindex="0"
                >Внимание к деталям</span
              >
              <p role="text" tabindex="0">
                Идейные соображения, a также начало повседневной работы по
                формированию позиции.
              </p>
            </div>
            <div class="description2 description" role="article">
              <div class="description-img-box">
                <img src="/assets/description2.svg" alt="svg icon" />
              </div>
              <span class="bold" role="text" tabindex="0">Пунктуальность</span>
              <p role="text" tabindex="0">
                Задача организации, в особенности же рамки и место обучения
                кадров влечет за собой.
              </p>
            </div>
            <div class="description3 description" role="article">
              <div class="description-img-box">
                <img src="/assets/description3.svg" alt="svg icon" />
              </div>
              <span class="bold" role="text" tabindex="0">Планирование</span>
              <p role="text" tabindex="0">
                Равным образом консультация c широким активом в значительной
                степени обуславливает.
              </p>
            </div>
            <div class="description4 description" role="article">
              <div class="description-img-box">
                <img src="/assets/description4.svg" alt="svg icon" />
              </div>
              <span class="bold" role="text" tabindex="0"
                >Современные технологии
              </span>
              <p role="text" tabindex="0">
                Значимость этих проблем настолько очевидна, что реализация
                плановых заданий.
              </p>
            </div>
          </div>
        </article>
        <section class="our-works-sc">
          <div class="container">
            <h2 class="heading2" role="heading" tabindex="0">
              Чем мы занимаемся
            </h2>
            <div class="our-works-images">
              <a
                href="#"
                class="img1 img"
                aria-label="Десктопные приложения"
                tabindex="0">
                <img
                  src="/assets/ourworks.webp"
                  alt="desktop, web developer, web development"
                  loading="lazy"
                  role="img" />
                <div class="gray-container">
                  <span class="bold">Десктопные приложения</span>
                </div>
              </a>
              <a
                href="#"
                class="img2 img"
                aria-label="Мобильные приложения"
                tabindex="0">
                <img
                  src="/assets/ourworks3.webp"
                  alt="mobile, web developer, web development"
                  loading="lazy"
                  role="img" />
                <div class="gray-container">
                  <span class="bold">Мобильные приложения</span>
                </div>
              </a>
              <a
                href="#"
                class="img3 img"
                tabindex="0"
                aria-label="Дизайнерские решения">
                <img
                  src="/assets/ourworks2.webp"
                  alt="design, web developer, web development"
                  loading="lazy"
                  role="img" />
                <div class="gray-container">
                  <span class="bold">Дизайнерские решения</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section class="our-team-sc">
          <div class="container">
            <h3 class="heading3" role="heading" tabindex="0">Наша команда</h3>
            <div class="team-cards">
              <div class="team-card1 card">
                <img
                  src="/assets/team-card1.webp"
                  alt="developer image"
                  loading="lazy" />
                <span class="bold" tabindex="0">Игорь Демьяненко</span>
                <p tabindex="0">Product Designer</p>
                <div class="team-card1-icons team-card_icon">
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-instagram"></i>
                    </i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-twitter"></i>
                    </i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-facebook-f"></i>
                    </i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </i>
                  </a>
                </div>
              </div>
              <div class="team-card2 card">
                <img
                  src="/assets/team-card2.webp"
                  alt="developer image"
                  loading="lazy" />
                <span class="bold" tabindex="0">Ольга Репина</span>
                <p tabindex="0">Frontend Developer</p>
                <div class="team-card2-icons team-card_icon">
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-instagram"></i>
                    </i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-twitter"></i>
                    </i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-facebook-f"></i>
                    </i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </i>
                  </a>
                </div>
              </div>
              <div class="team-card3 card">
                <img
                  src="/assets/team-card3.webp"
                  alt="developer image"
                  loading="lazy" />
                <span class="bold" tabindex="0">Николай Тарасов</span>
                <p tabindex="0">Marketing</p>
                <div class="team-card3-icons team-card_icon">
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-instagram"></i>
                    </i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-twitter"></i
                    ></i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-facebook-f"></i>
                    </i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </i>
                  </a>
                </div>
              </div>
              <div class="team-card4 card">
                <img
                  src="/assets/team-card4.webp"
                  alt="developer image"
                  loading="lazy" />
                <span class="bold" tabindex="0">Михаил Ермаков</span>
                <p tabindex="0">UI Designer</p>
                <div class="team-card4-icons team-card_icon">
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-instagram"></i>
                    </i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-twitter"></i>
                    </i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-facebook-f"></i>
                    </i>
                  </a>
                  <a href="#" role="link" tabindex="0">
                    <i class="fa-solid fa-circle circle">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="regular-customers-sc">
          <div class="container">
            <h4 class="heading4" role="heading" tabindex="0">
              Постоянные клиенты
            </h4>
            <div class="customers">
              <a href="#" class="customer" tabindex="0">
                <div>
                  <img src="/assets/client1icon.svg" alt="svg icon" />
                </div>
              </a>
              <a href="#" class="customer" tabindex="0">
                <div>
                  <img src="/assets/client2icon.svg" alt="svg icon" />
                </div>
              </a>
              <a href="#" class="customer" tabindex="0">
                <div>
                  <img src="/assets/client3icon.svg" alt="svg icon" />
                </div>
              </a>
              <a href="#" class="customer" tabindex="0">
                <div>
                  <img src="/assets/client4icon.svg" alt="svg icon" />
                </div>
              </a>
              <a href="#" class="customer" tabindex="0">
                <div>
                  <img src="/assets/client5icon.svg" alt="svg icon" />
                </div>
              </a>
              <a href="#" class="customer" tabindex="0">
                <div>
                  <img src="/assets/client6icon.svg" alt="svg icon" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer" class="footer">
        <div class="container">
          <div class="footer-left">
            <div class="left">
              <a href="index.html" class="logo" tabindex="0">
                <span class="color-blue">Web</span>Studio
              </a>
              <span class="bold">
                <a href="#footer" style="color: #fff" role="text" tabindex="0">
                  г. Киев, пр-т Леси Украинки, 26
                </a>
              </span>
              <a href="#footer" role="link" tabindex="0">
                <p>info@example.com</p>
              </a>
              <a href="#footer" role="link" tabindex="0">
                <p>+38 099 111 11 11</p>
              </a>
            </div>
            <div class="right">
              <div class="join">
                <span class="bold" role="text" tabindex="0"
                  >присоединяйтесь</span
                >
              </div>
              <div class="footer-icons">
                <a href="#" tabindex="0">
                  <i class="fa-solid fa-circle footer-circle">
                    <i class="fa-brands fa-instagram"></i>
                  </i>
                </a>
                <a href="#" tabindex="0">
                  <i class="fa-solid fa-circle footer-circle">
                    <i class="fa-brands fa-twitter"></i>
                  </i>
                </a>
                <a href="#" tabindex="0">
                  <i class="fa-solid fa-circle footer-circle">
                    <i class="fa-brands fa-facebook-f"></i>
                  </i>
                </a>
                <a href="#" tabindex="0">
                  <i class="fa-solid fa-circle footer-circle">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div class="footer-right">
            <span class="bold" tabindex="0">Подпишитесь на рассылку</span>
            <div class="footer-input">
              <input
                type="email"
                class="email-input"
                placeholder="E-mail"
                tabindex="0"
                name="email input" />
              <input
                type="button"
                value="Подписаться"
                class="sub-btn"
                tabindex="0" />
            </div>
          </div>
        </div>
      </footer>
`;
let bars = document.querySelector(".bars"),
  closeSidebar = document.querySelector(".close-sidebar"),
  sidebar = document.querySelector(".sidebar");
bars.addEventListener("click", () => {
  sidebar.classList.add("toggle-sidebar");
});
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("toggle-sidebar");
});
const sendEmailBtns = document.querySelectorAll(".send-email-btn");
const emailForm = document.querySelector(".email-form");
const darkerOverlay = document.querySelector(".darker-overlay");
const formCloseBtn = document.querySelector("#close-email-form");
const acceptPrivacyCheckbox = document.getElementById("accept-terms");
const formSubmitBtn = document.getElementById("email-form_send");
sendEmailBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!emailForm.classList.contains("show-form")) {
      darkerOverlay.style.display = "block";
      emailForm.style.display = "flex";
      sidebar.classList.remove("toggle-sidebar");
      setTimeout(() => {
        emailForm.classList.add("show-form");
        darkerOverlay.style.opacity = "1";
      }, 100);
    } else {
      emailForm.classList.remove("show-form");
      darkerOverlay.style.opacity = "0";
      setTimeout(() => {
        emailForm.style.display = "none";
        darkerOverlay.style.display = "none";
      }, 300);
    }
  });
});
formCloseBtn.addEventListener("click", () => {
  emailForm.classList.remove("show-form");
  darkerOverlay.style.opacity = "0";
  setTimeout(() => {
    emailForm.style.display = "none";
    darkerOverlay.style.display = "none";
  }, 300);
});
document.addEventListener("click", (e) => {
  const isClickInsideForm = emailForm.contains(e.target);
  const isClickOnButton = Array.from(sendEmailBtns).some((btn) =>
    btn.contains(e.target)
  );
  if (!isClickInsideForm && !isClickOnButton) {
    emailForm.classList.remove("show-form");
    darkerOverlay.style.opacity = "0";
    setTimeout(() => {
      emailForm.style.display = "none";
      darkerOverlay.style.display = "none";
    }, 300);
  }
});
formSubmitBtn.disabled = true;
acceptPrivacyCheckbox.addEventListener("change", function () {
  formSubmitBtn.disabled = !acceptPrivacyCheckbox.checked;
});
let isResizing = false;
window.addEventListener("resize", () => {
  if (!isResizing) {
    isResizing = true;
  }
});
if (isResizing) {
  darkerOverlay.style.display = "block";
  darkerOverlay.style.backgroundColor = "#fff";
  darkerOverlay.style.opacity = "1";
} else {
  darkerOverlay.style.display = "none";
  darkerOverlay.style.backgroundColor = "#0000006c";
  darkerOverlay.style.opacity = "0";
}
