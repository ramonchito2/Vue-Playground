// import todoList from './components/todoList.vue'
// Vue.component('todo-list', todoList);

Vue.component('alert-message', {
	props: ['title','message'],
	data() {
		return {
			isVisable: true
		}
	},
	template: `
		<article class="message" v-show="isVisable">
		  <div class="message-header">
		    <p>{{ title }}</p>
		    <button class="delete" aria-label="delete" @click="isVisable = false"></button>
		  </div>
		  <div class="message-body">
		    {{ message }}
		  </div>
		</article>
	`
})

Vue.component('modal', {
	props: ['title'],
	template: `
		<div class="modal is-active">
		  	<div class="modal-background"></div>
		  	<div class="modal-content box">
		    	<h2>{{ title }}</h2>
		    	<p><slot></slot></p>
		  	</div>
		  	<button class="modal-close is-large" aria-label="close" @click="$emit('closed')"></button>
		</div>
	`,
})

Vue.component('tabs', {
	template: `
		<div class="tab-container">
			<div class="tabs is-medium">
				<ul>
					<li class="is-active"><a>Pictures</a></li>
					<li><a>Music</a></li>
					<li><a>Videos</a></li>
					<li><a>Documents</a></li>
				</ul>
			</div>
			<div class="tab-content">
				<slot></slot>
			</div>
		</div>
	`,
	mounted() {
		console.log(this)
	}
})

Vue.component('tab', {
	props: ['title'],
	template: `
		<div><slot></slot></div>
	`
})

var app = new Vue({
	el: '#root',
	data: {
		showModal: false
	}
})
