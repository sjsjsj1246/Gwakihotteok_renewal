import { firebaseDatabase } from './firebase';

class GwakihotteokData {
  syncMenuData(onUpdate) {
    console.log('menu_data');
    const ref = firebaseDatabase.ref('menu_data');
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      console.log(value);
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveMenu(menu) {
    firebaseDatabase.ref(`menu_data/${menu.id}`).set(menu);
  }

  saveMenuData(menuData) {
    firebaseDatabase.ref(`menu_data/`).set(menuData);
  }

  removeMenu(menu) {
    firebaseDatabase.ref(`menu_data/${menu.id}`).remove();
  }
}

export default GwakihotteokData;
