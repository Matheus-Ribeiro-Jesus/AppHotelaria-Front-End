    <?php
    
    require_once __DIR__ . "/../models/UserModel.php";
    require_once "PasswordController.php";

    class AuthController{
        public static function login($conn, $data){
            $data['email'] = trim($data['email']);
            $data['senha'] = trim($data['senha']);
            
            // Confirmar se tem algum campo vazio

            if( empty($data['email']) || empty($data['senha']) ) {
                return jsonResponse(
                [
                "status"=>"erro",
                "message"=>"Preencha todos os campos"

                ], 401);
            }
            
            $user = UserModel::validateUser($conn, $data['email'], $data['senha']);
                if($user){
                    return jsonResponse(
                [
                    "id"=>$user['id'],
                    "nome"=>$user['nome'],
                    "email"=>$user['email'],
                    "cargo"=>$user['cargo']
                
                ]);
        }else{
            return jsonResponse(
            [
                "reposta"=>"Erro",
                "message"=>"Credenciais invalidas"

            ], 401);
        }
    }
}


?>