import Ember from 'ember';

export default Ember.Component.extend({
  isChecked: false,
  isFavorited: false,

  actions: {
    toggleCheck() {
      this.toggleProperty('isChecked');
    },

    toggleFavorite() {
      this.toggleProperty('isFavorited');
    }
  }
});
