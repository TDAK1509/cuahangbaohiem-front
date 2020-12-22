import Vue from "vue";
import VueFbCustomerChat from "vue-fb-customer-chat";

Vue.use(VueFbCustomerChat, {
  version: "v9.0",
  page_id: "103531424958380",
  theme_color: "#869d42",
  locale: "vi_VN",
  logged_in_greeting: "Xin chào! Chúng tôi có thể hỗ trợ gì cho bạn?",
  logged_out_greeting: "Xin chào! Chúng tôi có thể hỗ trợ gì cho bạn?"
});
