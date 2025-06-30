<template>
  <main id="todolist">
      <div class="lang-toggle">
    <button @click="toggleLanguage">
      {{ currentLocale === 'es' ? 'EN' : 'ES' }}
  </button>
</div>
    <h1>
      {{ $t('title')}}
      <span>{{ $t('subtitle')}}</span>
    </h1>

    <template v-if="todo.length">
      <transition-group name="todolist" tag="ul">
        <li
          v-for="item in todoByStatus"
          :class="{ done: item.done,
            'high-priority': item.priority === 'high',
            'low-priority': item.priority === 'low'
           }"
          :key="item.id"
        >
          <span class="label">{{ item.label }}</span>
          <div class="actions">
            <button
              class="btn-picto"
              type="button"
              @click="markAsDoneOrUndone(item)"
              :aria-label="item.done ? 'Undone' : 'Done'"
              :title="item.done ? 'Undone' : 'Done'"
            >
              <i class="material-icons" aria-hidden="true">
                {{ item.done ? 'check_box' : 'check_box_outline_blank' }}
              </i>
            </button>
            <button
              class="btn-picto"
              type="button"
              @click="deleteItemFromList(item)"
              aria-label="Delete"
              title="Delete"
            >
              <i class="material-icons" aria-hidden="true">delete</i>
            </button>
          </div>
        </li>
      </transition-group>
    </template>
    <p v-else class="emptylist">{{ $t('emptyList')}}</p>

    <form @submit.prevent="addItem" name="newform">
      <label for="newitem">{{ $t('addLabel') }}</label>
      <input type="text" v-model="newitem" id="newitem" name="newitem" />
      
      <label for="priority"></label>
      <select v-model="priority" id="priority" name="priority" class="priority-select">
        <option value="normal">{{ $t('priority.normal')}}</option>
        <option value="high">{{ $t('priority.high')}}</option>
        <option value="low">{{ $t('priority.low')}}</option>
      </select>

      <button type="submit">{{ $t('addButton') }}</button>
    </form>
  </main>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      newitem: "",
      priority: "normal",
      sortByStatus: false,
      sortyByPriority: true,
      todo: [],
    };
  },
  computed: {
    todoByStatus() {
      const priorityOrder = {
        high: 1,
        normal: 2,
        low: 3,
      };

      const sortByPriority = (a, b) => {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      };

      const done = this.todo.filter(item => item.done).sort(sortByPriority);
      const notDone = this.todo.filter(item => !item.done).sort(sortByPriority);

      return [...notDone, ...done];
    },
    currentLocale() {
      return this.$i18n.locale;
    }
  },
  methods: {
    addItem() {
      const trimmed = this.newitem.trim();
      if (trimmed) {
        this.todo.push({
          id: Date.now(),
          label: trimmed,
          done: false,
          priority: this.priority
        });
        this.newitem = "";
        this.priority = "normal";
      }
    },
    markAsDoneOrUndone(item) {
      item.done = !item.done;
    },
    deleteItemFromList(item) {
      const index = this.todo.indexOf(item);
      if (index !== -1) this.todo.splice(index, 1);
    },
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === 'es' ? 'en' : 'es';
    }
  }
};
</script>