const todoList = document.querySelector("#todolist");

fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json())
	.then((data) => {
		let completedTodos = 0;
		const promises = [];

		data.forEach((item) => {
			const li = document.createElement("li");
			const checkbox = document.createElement("input");
			checkbox.setAttribute("type", "checkbox");
			checkbox.checked = false; // set initial state to empty

			if (item.completed) {
				completedTodos++;
				li.classList.add("completed");
				checkbox.checked = true;
			}

			const label = document.createElement("label");
			label.innerText = item.title;

			li.appendChild(checkbox);
			li.appendChild(label);
			todoList.appendChild(li);

			promises.push(new Promise((resolve, reject) => {
				checkbox.addEventListener("change", (e) => {
					if (e.target.checked) {
						completedTodos++;
						if (completedTodos >= 5) {
							resolve(completedTodos);
						}
					} else {
						completedTodos--;
					}
				});
			}));
		});

		Promise.all(promises)
			.then((result) => {
				alert(`Congrats Tasks have been Successfully Completed`);
			})
			.catch((error) => {
				console.error(error);
			});
	})
	.catch((error) => {
		console.error(error);
	});

const logoutLink = document.querySelector(".navbar-nav .nav-item:last-child .nav-link");

logoutLink.addEventListener("click", (e) => {
	e.preventDefault();
	window.location.href = "index.html";
});
