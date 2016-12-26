@extends('layouts.admin')

@section('content')
<div class="container">
    <div class="row">
        <div class="col s8 offset-s2 z-depth-2">
             <h3 class="center">Login</h3>
                    <form method="POST" action="{{ url('admin/login') }}">
                        {{ csrf_field() }}

                        <div class="row">
                            <div class="input-field col s12">
                                @php
                                    $messageError = $errors->has('email') ? "data-error='{$errors->first('email')}'" : null;
                                @endphp
                                <input id="email" type="email" class="validate {{ $messageError ? 'invalid' : '' }}"
                                       name="email" value="{{ old('email') }}" required autofocus>
                                <label for="email" {!! $messageError !!}>E-Mail</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                                @php
                                    $messageError = $errors->has('password') ? "data-error='{$errors->first('password')}'" : null;
                                @endphp
                                <input id="password" type="password" class="validate {{ $messageError ? 'invalid' : '' }}"
                                       name="password" value="{{ old('password') }}" required autofocus>
                                <label for="password" {!! $messageError !!}>Senha</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                                <input id="remember" type="checkbox" name="remember">
                                <label for="remember">Lembrar-me</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                                <button type="submit" class="btn">Login</button>
                                <a class="btn btn-flat" href="{{ url('/password/reset') }}">
                                    Esqueceu sua Senha?
                                </a>
                            </div>
                        </div>
                    </form>
        </div>
    </div>
</div>
@endsection

@section('foot')
    <script type="text/javascript">
        $(document).ready(function() {
            Materialize.updateTextFields();
        });
    </script>
@endsection
