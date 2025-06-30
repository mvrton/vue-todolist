import {createI18n} from 'vue-i18n';

const messages = {
      en: {
    title: 'To Do',
    subtitle: 'tasks:',
    addLabel: 'Add task:',
    addButton: 'Add',
    emptyList: 'The list is empty.',
    delete: 'Delete',
    done: 'Done',
    undone: 'Undone',
    priority: {
      high: 'High',
      normal: 'Normal',
      low: 'Low'
    }
},
  es: {
    title: 'To Do',
    subtitle: 'tareas :',
    addLabel: 'Añadir tarea:',
    addButton: 'Añadir',
    emptyList: 'La lista está vacía.',
    delete: 'Eliminar',
    done: 'Hecho',
    undone: 'Deshecho',
    priority: {
      high: 'Alta',
      normal: 'Normal',
      low: 'Baja'
    }
  }
};

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages
});

export default i18n;