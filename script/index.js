document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".js-burger-toggle");
  const menu = document.querySelector(".js-menu");
  const catalogParent = document.querySelector(".js-catalog-parent");

  if (burgerBtn && menu) {
    burgerBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.classList.toggle("is-open");
      this.classList.toggle("is-active");
      document.body.classList.toggle("no-scroll");
    });
  }
  if (catalogParent) {
    catalogParent.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.toggle("is-active");
    });
  }
  document.addEventListener("click", (e) => {
    if (catalogParent && !catalogParent.contains(e.target)) {
      catalogParent.classList.remove("is-active");
    }
    if (menu && !menu.contains(e.target) && !burgerBtn.contains(e.target)) {
      menu.classList.remove("is-open");
      burgerBtn.classList.remove("is-active");
      document.body.classList.remove("no-scroll");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".promo__swiper")) {
    new Swiper(".promo__swiper", {
      speed: 500,
      fadeEffect: {
        crossFade: true,
      },
      loop: true,
      pagination: {
        el: ".promo__pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".promo__nav--next",
        prevEl: ".promo__nav--prev",
      },
      breakpoints: {
        1024: { allowTouchMove: false },
        0: { allowTouchMove: true },
      },
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".suggestSwiper")) {
    new Swiper(".suggestSwiper", {
      slidesPerView: 1.4,
      spaceBetween: 16,
      navigation: {
        nextEl: ".products-suggest .suggest-next",
      },
      breakpoints: {
        1024: { slidesPerView: 5.1, spaceBetween: 30 },
        820: { slidesPerView: 3.6, spaceBetween: 20 },
        480: { slidesPerView: 1.4, spaceBetween: 16 },
      },
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".saleSwiper")) {
    new Swiper(".saleSwiper", {
      slidesPerView: 1.4,
      spaceBetween: 16,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".discount-section .suggest-next",
      },
      breakpoints: {
        1024: { slidesPerView: 5.1, spaceBetween: 30 },
        820: { slidesPerView: 3.6, spaceBetween: 20 },
        480: { slidesPerView: 1.4, spaceBetween: 16 },
      },
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".offersSwiper")) {
    new Swiper(".offersSwiper", {
      slidesPerView: 3,
      spaceBetween: 22,
      navigation: {
        nextEl: ".offers-next",
      },
      breakpoints: {
        1280: { slidesPerView: 3 },
        1024: { slidesPerView: 2.5 },
        820: { slidesPerView: 2.5 },
        0: { slidesPerView: 1.1, spaceBetween: 16 },
      },
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".paymentSwiper")) {
    new Swiper(".paymentSwiper", {
      slidesPerView: "auto",
      spaceBetween: 115,
      loopedSlides: 10,
      loopAdditionalSlides: 10,
      speed: 6000,
      allowTouchMove: false,
      // freeMode: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        1280: { spaceBetween: 115 },
        1024: { spaceBetween: 80 },
        768: { spaceBetween: 50 },
        480: { spaceBetween: 50 },
        0: { spaceBetween: 50, speed: 4000 },
      },
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".feedback__form");
  if (!form) return;

  const nameInput = form.querySelector('input[name="name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const phoneInput = document.querySelector("#phone_by");

  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.startsWith("375")) {
        value = value.slice(3);
      }
      let result = "+375 ";
      if (value.length > 0) {
        result += "(" + value.substring(0, 2);
      }
      if (value.length >= 3) {
        result += ") " + value.substring(2, 5);
      }
      if (value.length >= 6) {
        result += " " + value.substring(5, 7);
      }
      if (value.length >= 8) {
        result += " " + value.substring(7, 9);
      }
      e.target.value = result.trim();
    });
  }

  const showError = (input, show) => {
    const group = input.closest(".contacts__form-group");
    if (show) {
      group.classList.add("feedback__input--error");
    } else {
      group.classList.remove("feedback__input--error");
    }
  };

  [nameInput, emailInput, phoneInput].forEach((input) => {
    if (!input) return;
    input.addEventListener("input", () => {
      showError(input, false);
    });
  });

  form.addEventListener("submit", (e) => {
    let hasError = false;

    if (!nameInput.value.trim()) {
      e.preventDefault();
      showError(nameInput, true);
      hasError = true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      e.preventDefault();
      showError(emailInput, true);
      hasError = true;
    }
    if (phoneInput) {
      const phoneDigits = phoneInput.value.replace(/\D/g, "");
      if (phoneDigits.length < 12) {
        e.preventDefault();
        showError(phoneInput, true);
        hasError = true;
      }
    }
    if (hasError) {
      const firstError = form.querySelector(
        ".feedback__input--error input, .feedback__input--error textarea",
      );
      if (firstError) {
        firstError.focus();
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("active");
      });
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const openModalBtns = document.querySelectorAll(".open-modal");
  const closeMarkBtns = document.querySelectorAll(".modal-close");
  const modalOverlays = document.querySelectorAll(".modal-overlay");

  const closeModal = () => {
    const activeModal = document.querySelector(".modal-overlay.active");
    if (activeModal) {
      activeModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  };
  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = btn.getAttribute("data-target");
      const targetModal = document.getElementById(targetId);

      if (targetModal) {
        targetModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeMarkBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", closeModal);
  });

  modalOverlays.forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tagsWrapper = document.querySelector(".tags-wrapper");
  const moreBtn = document.querySelector(".tag--more");
  const hiddenTags = document.querySelectorAll(".tag--hidden");
  const articles = document.querySelectorAll(".article-card");

  if (!tagsWrapper || !moreBtn) return;

  let activeTags = new Set(["running", "football"]);

  const updateTagsVisual = () => {
    document.querySelectorAll(".tag[data-tag]").forEach((tag) => {
      const tagValue = tag.dataset.tag;
      if (activeTags.has(tagValue)) {
        tag.classList.add("tag--active");
      } else {
        tag.classList.remove("tag--active");
      }
    });
  };

  const filterArticles = () => {
    if (!articles || articles.length === 0) return;

    articles.forEach((article) => {
      const rawTags = article.dataset.tags ? article.dataset.tags.trim() : "";
      const articleTags = rawTags ? rawTags.split(/\s+/) : [];
      const hasMatch = articleTags.some((tag) => activeTags.has(tag));

      if (hasMatch || activeTags.size === 0) {
        article.style.display = "block";
      } else {
        article.style.display = "none";
      }
    });

    const masonryColumns = document.querySelectorAll(".masonry-column");
    if (masonryColumns && masonryColumns.length > 0) {
      masonryColumns.forEach((col) => {
        if (!col) return;

        const visibleArticles = col.querySelectorAll(
          '.article-card:not([style*="display: none"])',
        );
        col.style.display = visibleArticles.length > 0 ? "flex" : "none";
      });
    }
  };

  tagsWrapper.addEventListener("click", (e) => {
    const tag = e.target.closest(".tag[data-tag]");
    if (!tag) return;

    const tagValue = tag.dataset.tag;
    if (activeTags.has(tagValue)) {
      activeTags.delete(tagValue);
    } else {
      activeTags.add(tagValue);
    }

    updateTagsVisual();
    filterArticles();
  });

  moreBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = moreBtn.classList.toggle("is-active");

    if (hiddenTags) {
      hiddenTags.forEach((tag) => tag.classList.toggle("is-visible"));
    }

    moreBtn.textContent = isExpanded ? "Скрыть" : "Ещё 30+ тэгов";
  });

  updateTagsVisual();
  filterArticles();
});

const gallerySliders = document.querySelectorAll(".articleGallerySwiper");
gallerySliders.forEach((sliderContainer) => {
  const parentSection = sliderContainer.closest("section");
  const nextBtn = parentSection
    ? parentSection.querySelector(".article-gallery__next")
    : null;

  new Swiper(sliderContainer, {
    slidesPerView: 1.2,
    spaceBetween: 16,
    navigation: {
      nextEl: nextBtn,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3.95,
        spaceBetween: 30,
      },
    },
  });
});

if (document.querySelector(".materialsSwiper")) {
  new Swiper(".materialsSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 16,
    navigation: {
      nextEl: ".materials-slider__next",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3.9,
        spaceBetween: 30,
        // allowTouchMove: false
      },
      768: {
        slidesPerView: 1.8,
        spaceBetween: 20,
        // allowTouchMove: true
      },
    },
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const filterTitles = document.querySelectorAll(".filter-group__title");

  filterTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const parentGroup = title.closest(".filter-group");
      if (parentGroup) {
        parentGroup.classList.toggle("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".order-actions .btn");
  const noticeTeam = document.querySelector(".product-notice--team");
  const noticeRetail = document.querySelector(".product-notice--retail");

  orderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      orderButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      if (mode === "team") {
        noticeTeam.classList.add("active");
        noticeRetail.classList.remove("active");
      } else {
        noticeRetail.classList.add("active");
        noticeTeam.classList.remove("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const thumbsArrowNext = document.querySelector(".thumbs-arrow--next");
  const thumbsArrowPrev = document.querySelector(".thumbs-arrow--prev");
  const suggestGradient = document.querySelector(".suggest-gradient");

  function updateThumbsControls(swiper) {
    if (swiper.isBeginning) thumbsArrowPrev?.classList.add("is-hidden");
    else thumbsArrowPrev?.classList.remove("is-hidden");

    if (swiper.isEnd) {
      thumbsArrowNext?.classList.add("is-hidden");
      suggestGradient?.classList.add("is-hidden");
    } else {
      thumbsArrowNext?.classList.remove("is-hidden");
      suggestGradient?.classList.remove("is-hidden");
    }
  }

  const thumbsSwiper = new Swiper(".product-gallery__thumbs-swiper", {
    spaceBetween: 20,
    slidesPerView: 1.5,

    freeMode: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".thumbs-arrow--next",
      prevEl: ".thumbs-arrow--prev",
    },

    on: {
      init: function () {
        updateThumbsControls(this);
      },
      reachEnd: function () {
        updateThumbsControls(this);
      },
      reachBeginning: function () {
        updateThumbsControls(this);
      },
      fromEdge: function () {
        updateThumbsControls(this);
      },
      slideChange: function () {
        updateThumbsControls(this);
      },
    },
    breakpoints: {
      768: { slidesPerView: 4, spaceBetween: 20 },
      1024: { slidesPerView: 5, spaceBetween: 15 },
    },
  });

  const mainSwiper = new Swiper(".product-gallery__swiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".gallery-arrow--next",
      prevEl: ".gallery-arrow--prev",
    },

    thumbs: {
      swiper: thumbsSwiper,
    },
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   // Form validation
//   const form = document.getElementById("checkoutForm");
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // Add your submit logic here
//     alert("Заказ оформлен!");
//   });

//   // Promo code
//   const promoBtn = document.querySelector(".btn--promo");
//   promoBtn.addEventListener("click", () => {
//     const promoInput = document.querySelector(".checkout-form__input--promo");
//     if (promoInput.value.trim()) {
//       alert("Промокод применён!");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".vacancies-tab");
  const contents = {
    production: document.getElementById("tab-production"),
    office: document.getElementById("tab-office"),
    store: document.getElementById("tab-store"),
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      Object.values(contents).forEach((content) => {
        content.style.display = "none";
        content.classList.remove("active");
      });

      const target = contents[tab.dataset.tab];
      if (target) {
        target.style.display = "grid";
        if (tab.dataset.tab !== "production") {
          target.classList.add("active");
        }
      }
    });
  });

  const videoSection = document.getElementById("videoSection");
  const playBtn = document.getElementById("videoPlayBtnFull");
  const video = document.getElementById("mainVideo");

  if (playBtn && video) {
    playBtn.addEventListener("click", () => {
      videoSection.classList.add("video-playing");
      video.play();
    });

    video.addEventListener("ended", () => {
      videoSection.classList.remove("video-playing");
      video.currentTime = 0;
    });

    video.addEventListener("click", () => {
      if (!video.paused) {
        video.pause();
        videoSection.classList.remove("video-playing");
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".partners-swiper")) {
    new Swiper(".partners-swiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".part-swiper-button_nav-next",
        prevEl: ".part-swiper-button_nav-prev",
      },
      breakpoints: {
        1280: { slidesPerView: 4 },
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
      },
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookieBanner");

  function acceptCookies() {
    if (cookieBanner) {
      cookieBanner.style.display = "none";
    }
    localStorage.setItem("cookiesAccepted", "true");
  }
  if (localStorage.getItem("cookiesAccepted") === "true") {
    if (cookieBanner) {
      cookieBanner.style.display = "none";
    }
  }
  const acceptBtn = document.querySelector(".cookie-banner__btn");
  if (acceptBtn) {
    acceptBtn.addEventListener("click", acceptCookies);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const successOverlay = document.querySelector(".success-overlay");
  const successClose = document.querySelector(".success-close");
  const demoBtn = document.querySelector(".btn-demo-success");
  const openSuccessModal = () => {
    successOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };
  const closeSuccessModal = () => {
    successOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };
  if (demoBtn) {
    demoBtn.addEventListener("click", openSuccessModal);
  }
  if (successClose) {
    successClose.addEventListener("click", closeSuccessModal);
  }
  successOverlay.addEventListener("click", (e) => {
    if (e.target === successOverlay) closeSuccessModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && successOverlay.classList.contains("active")) {
      closeSuccessModal();
    }
  });

  window.openSuccessModal = openSuccessModal;
  window.closeSuccessModal = closeSuccessModal;
});
document.addEventListener("DOMContentLoaded", () => {
  const orderOverlay = document.querySelector(".order-overlay");
  const orderClose = document.querySelector(".order-close");
  const orderBtn = document.querySelector(".order-success-btn");

  const openOrderModal = () => {
    if (!orderOverlay) return;
    orderOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeOrderModal = () => {
    if (!orderOverlay) return;
    orderOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (orderBtn) {
    orderBtn.addEventListener("click", openOrderModal);
  }

  if (orderClose) {
    orderClose.addEventListener("click", closeOrderModal);
  }

  if (orderOverlay) {
    orderOverlay.addEventListener("click", (e) => {
      if (e.target === orderOverlay) closeOrderModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && orderOverlay?.classList.contains("active")) {
      closeOrderModal();
    }
  });
  window.openOrderModal = openOrderModal;
  window.closeOrderModal = closeOrderModal;
});