<template>
	<h1>Add New To-Do List Item</h1>
	<input type="text" v-model="newItem" @keyup.enter="addName" placeholder="press enter to add typed item">
	<div class="todolist">
		<h2> {{ message }} </h2>
		<ul>
			<li v-for="task in tasks" :class="{ 'completed' : task.completed }" @click="toggleClass">{{ task.description }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'todoList'
		data() {
			newItem: '',
			message: 'My To-do list',
			tasks: [
				{ description: 'Go buy milk', completed: true },
				{ description: 'Hang out with friends', completed: false },
				{ description: 'Take more awesome pictures', completed: true },
				{ description: 'Excersice more often', completed: false },
				{ description: 'Make cool bench' }
			]
		},
		methods() {
			toggleClass(event) {
				event.target.classList.toggle('completed');
			},
			addName() {
				this.tasks.push({
					'description': this.newItem,
					'completed': false
				});
				this.newItem = '';
			}
		}
	}
</script>