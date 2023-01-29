<php>
    <body>
        $filename = $_FILES['file']['name'];

        $location = "Upload/".$filename;

        if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){
            echo <p>FILE UPLODED</p>;
        }
    </body>
</php>