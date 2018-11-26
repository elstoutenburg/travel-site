import MobileMenu from "./modules/mobile-menu";
import RevealOnScroll from "./modules/revealOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/stickyHeader";

const mobileMenu = new MobileMenu();
const revealFeatureOnScroll = new RevealOnScroll($(".feature-item"), "85%");
const revealTestimonialOnScroll = new RevealOnScroll($(".testimonial"), "60%");
const stickyHeader = new StickyHeader();
