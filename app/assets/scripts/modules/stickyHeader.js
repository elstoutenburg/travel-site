import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTrigger = $(".large-hero__title");
    this.createWaypoint();
    this.pageSections = $(".page-section");
    this.createPageSectionWaypoints();
    this.headerLinks = $(".primary-nav a");
    this.addSmoothScrolling();
  }
  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createWaypoint() {
    let that = this;
    new Waypoint({
      element: this.headerTrigger[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    let that = this;
    this.pageSections.each(function() {
      let currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: function(direction) {
          if (direction == "down") {
            let matchingHeaderLink = currentSection.getAttribute(
              "data-matching-link"
            );
            that.headerLinks.removeClass("current-link");
            $(matchingHeaderLink).addClass("current-link");
          }
        },
        offset: "18%"
      });
      new Waypoint({
        element: currentSection,
        handler: function(direction) {
          if (direction == "up") {
            let matchingHeaderLink = currentSection.getAttribute(
              "data-matching-link"
            );
            that.headerLinks.removeClass("current-link");
            $(matchingHeaderLink).addClass("current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
