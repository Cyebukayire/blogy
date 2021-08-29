<template>
<div class="container">
  <ul class="pagination">
    <li class="icon">
      <a href="#"><span class="fas fa-angle-left"></span>Previous</a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li class="icon">
      <a href="#">Next<span class="fas fa-angle-right"></span></a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
    name: 'Navigation',
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  box-shadow: 0px 0.5vh 5px 0px rgba(0, 0, 0, 0.25);
}

.pagination {
  margin: 25px 0 15px 0;
}
.pagination,
.pagination li a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.pagination li {
  background: rgba(42, 90, 73, 0.303);
  list-style: none;
  margin: 0.5em;
  border-radius: 50px;
}
.pagination li a {
  text-decoration: none;
  color: #fdfdfd;
  height: 50px;
  width: 50px;
  font-size: 18px;
  padding-top: 1px;
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.35);
}
/* .pagination li:last-child a {
  border-right-width: 1px;
} */
.pagination li a:hover {
  background: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(159, 178, 212, 0.35);
  border-bottom-color: rgba(81, 171, 223, 0.5);
}
.pagination li a:focus,
.pagination li a:active {
  padding-top: 4px;
  border-left-width: 1px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: inset 0px 2px 1px 0px rgba(0, 0, 0, 0.25);
}
.pagination li.icon a {
  min-width: 120px;
}
.pagination li:first-child span {
  padding-right: 8px;
}
.pagination li:last-child span {
  padding-left: 8px;
}

</style>