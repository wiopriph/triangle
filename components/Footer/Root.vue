<script>
import IconAnbuy from '~/assets/images/footer/icon-anbuy.svg?inline';
import IconFb from '~/assets/images/footer/icon-fb.svg?inline';
import IconInsta from '~/assets/images/footer/icon-insta.svg?inline';
import IconMail from '~/assets/images/footer/icon-mail.svg?inline';
import IconTwitter from '~/assets/images/footer/icon-twitter.svg?inline';

import { CATEGORIES } from '~/constants/categories';

export default {
  components: {
    IconAnbuy,
    IconMail,
    IconFb,
    IconInsta,
    IconTwitter,
  },

  data() {
    return {
      categories: CATEGORIES,
    };
  },
};
</script>

<template>
  <footer :class="$style.root">
    <div :class="$style.content">
      <div :class="$style.logo">
        <IconAnbuy />

        <NuxtLink :to="{ name: 'index' }" :class="$style.policy">
          privacy policy
        </NuxtLink>
      </div>

      <div :class="$style.category">
        <div :class="$style.title">
          Category
        </div>

        <ul :class="$style.categoryList">
          <li
            v-for="item in categories"
            :key="item.type"
            :class="$style.categoryItem"
          >
            <NuxtLink
              :to="{ name: 'index' }"
              :class="$style.categoryLink"
              v-text="item.label"
            />
          </li>
        </ul>
      </div>

      <div :class="$style.copyright">
        &#169; 2023
      </div>

      <div :class="$style.divider" />

      <div :class="$style.feedback">
        <div>
          <div :class="$style.title">
            Contacts
          </div>

          <div :class="$style.contacts">
            <a href="mailto:info@anbay.com?subject = Feedback&body = Message" :class="$style.email">
              <IconMail :class="$style.emailIcon" />
              info@anbay.com
            </a>

            <div :class="$style.socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFb />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInsta />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTwitter />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div :class="$style.updatesText">
            keep for updates
          </div>

          <input
            type="text"
            placeholder="e-mail"
            :class="$style.updatesInput"
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" module>
.root {
  width: 100%;
  margin-top: auto;
  background-color: $ui-color-black;
}

.content {
  @include ui-simple-container;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 20px;
  color: $ui-color-transparent;

  // md наверное
  @include sm {
    position: relative; // fix летающих ссылок
    flex-direction: column;
    padding: 16px 20px 36px 20px;
  }
}

.title {
  @include ui-typo-12;
  margin-bottom: 36px;
  color: $ui-color-text-grey;
  text-transform: uppercase;

  @include sm {
    margin-bottom: 16px;
  }
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @include sm {
    flex-direction: row;
    margin-bottom: 26px;
  }
}

.policy {
  @include ui-typo-12;
  color: $ui-color-text-grey;
  text-decoration: none;

  @include sm {
    // @todo пофиксить эту грязь
    position: absolute;
    bottom: 8px;
    left: 20px;
  }
}

.category {
  width: 100%;
  max-width: 380px;
}

.categoryList {
  margin-bottom: -8px; // fix item margin-bottom
  columns: 2;
}

.categoryItem {
  margin-bottom: 8px;
}

.categoryLink {
  @include ui-typo-15;
  color: $ui-color-transparent;
  text-decoration: none;
}

.copyright {
  @include ui-typo-12;
  color: $ui-color-text-grey;

  @include exclude-sm {
    display: flex;
    align-items: flex-end;
  }

  @include sm {
    // @todo пофиксить эту грязь
    position: absolute;
    right: 20px;
    bottom: 8px;
  }
}

.divider {
  margin: 24px 0 8px;

  @include exclude-sm {
    display: none;
  }

  @include sm {
    width: 100%;
    height: 1px;
    background-color: #353434
  }
}

.feedback {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contacts {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @include sm {
    margin-top: -28px;
  }

  @include exclude-sm {
    margin-top: -36px;
  }
}

.email {
  @include ui-typo-15;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: $ui-color-transparent;
  text-decoration: none;
}

.emailIcon {
  margin-right: 10px;
}

.socials {
  display: flex;
  flex-direction: column;
  line-height: 10px;
}

.updatesText {
  @include ui-typo-15;
  margin-bottom: 8px;
  color: $ui-color-transparent;
}

.updatesInput {
  // @todo заменить инпут
  width: 100%;
  min-width: 320px;
  max-width: 400px;
}
</style>
