<!DOCTYPE html>
<html>
<body>
    <?php
        $logEmail = $_POST["logEmail"];
        $logPass = $_POST["logPass"];

        echo "<h1>Welcome, $logEmail</h1>";
        
        class echoInfo{
            public function __construct($giveEmail,$givePass){                
                $this->email = $giveEmail;
                $this->pass = $givePass;
            }
        }

        $info = new echoInfo($logEmail,$logPass);

        echo $info->email . "<br>";
        echo $info->pass;
    ?>
</body>
</html>


