<template>
  <footer class="footer">
      <div class="container">
          <ul class="footer-links d-flex center flex-center">
              <li class="footer-links-item">
                  FAQ 
              </li>
              <li class="footer-links-item">
                  Privacy Policy
              </li>
              <li class="footer-links-item">
                  Terms of Use
              </li>
              <li class="footer-links-item">
                  Instagram 
              </li>
          </ul>
          <p class="footer-copyright">
              © 2022 WAYYOUCHOOSE. ALL RIGHTS RESERVED.
          </p>
      </div>
  </footer>
</template>

<script>
export default {
    name: 'v-footer'
}
</script>

<style>
.footer {
    background-color: #fff;
    padding: 6rem 0 5rem 0;
    font-weight: 300;
    font-size: 10px;
    line-height: 14px;
    color: #60676B;
}
.footer-links {
    margin-bottom: 2rem;
}
.footer-links-item {
    margin: 0 1.5rem;
}
.footer-copyright {
    font-weight: 300;
    font-size: 10px;
    line-height: 14px;
    text-transform: lowercase;
    color: #979797;
    text-align: center
}
</style>