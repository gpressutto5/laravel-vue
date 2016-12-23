<template>
    <div>
        <div class="navbar">
            <nav class="light-blue">
                <div class="nav-wrapper">
                    <div class="container">
                        <a href="/" class="brand-logo">Contas</a>
                        <a href="#" data-activates="mobile-demo" class="button-collapse"><i
                                class="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down">
                            <li class="waves-effect" v-for="link in config.menus">
                                <a :href="link.url">{{ link.nome }}</a>
                            </li>
                            <li class="waves-effect">
                                <a :href="config.urlLogout"
                                   @click.prevent="goToLogout()">Logout</a>
                            </li>
                        </ul>
                        <ul id="mobile-demo" class="side-nav">
                            <li v-for="link in config.menus">
                                <a :href="link.url"><i class="material-icons">{{ link.icon }}</i> {{ link.nome }}</a>
                            </li>
                            <li>
                                <a :href="config.urlLogout"
                                   @click.prevent="goToLogout()"><i class="material-icons">exit_to_app</i> Logout
                                </a>
                            </li>
                        </ul>
                        <form id="logout-form" :action="config.urlLogout" method="POST" style="display: none;">
                            <input type="hidden" name="_token" :value="config.csrf"/>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            config: {
                type: Object,
                default(){
                    return {
                        name: '',
                        menus: [],
                        urlLogout: '/admin/logout',
                        csrf: ''
                    }
                }
            }
        },
        methods: {
            goToLogout(){
                $("#logout-form").submit();
            }
        },
        ready(){
            $(".button-collapse").sideNav({
                closeOnClick: true,
                draggable: true
            });
        }
    }

</script>
