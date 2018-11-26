import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(element, offset) {
    this.itemsToReveal = element;
    this.offsetPercent = offset;
    this.hideIntially();
    this.createWaypoints();
  }

  hideIntially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    let that = this;
    this.itemsToReveal.each(function() {
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercent
      });
    });
  }
}

export default RevealOnScroll;
