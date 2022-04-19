<template>
    <div class="first-content">
        <table class="table caption-top">
        <thead>
            <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Price</th>
            <th scope="col">Author</th>
            <th scope="col">Date</th>
            </tr>
        </thead>
        <tbody v-for="(novel, index) in novels" :key="index" :novel="novel">
            <tr>
                <td><a href="javascript:" v-b-modal.novel-list active="'novel'" @click="sendInfo(novel)">{{ novel.book_name }}</a></td>
                <td>{{ novel.price }}</td>
                <td>{{ novel.author }}</td>
                <td>{{ novel.date }}</td>
            </tr>
        </tbody>
        </table>
        <div>
            <b-modal id="novel-list" title="BootstrapVue">
                <b-form-group id="book_name" label="Book Name">
                    <b-form-input id="name_input" :value="selected_novel.book_name"></b-form-input>
                </b-form-group>
                <b-form-group id="price" label="Price">
                    <b-form-input id="price_input" :value="selected_novel.price"></b-form-input>
                </b-form-group>
                <b-form-group id="author" label="Author">
                    <b-form-input id="author_input" :value="selected_novel.author"></b-form-input>
                </b-form-group>

                <b-form-group id="date" label="Date">
                    <b-form-input id="date_input" :value="selected_novel.date"></b-form-input>
                </b-form-group>
            </b-modal>
        </div>
</div>
</template>

<script>
export default {
    name: 'BookList',
    props: ['novels'],
    data() {
        return {
            selected_novel: { book_name: '', price: '', author: '', date: ''}
        }
    },
    methods: {
        sendInfo(novel) {
            this.selected_novel = novel;
        }
    }
}
</script>

<style scoped>
.first-content {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    text-align: center;
    background-color: #C0C0C0;
    color: #fff;
    margin: 0px 50px;
    text-align: center;
    padding: 150px 0px;
}
a {
    text-decoration-line: none;
}
</style>