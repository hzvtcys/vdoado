<?php if (!defined('THINK_PATH')) exit();?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>课程中心</title>
    <link rel="shortcut icon" href="favicon.ico"> 
    <link href="<?php echo ($smarty["const"]["CSS_URL"]); ?>bootstrap.min.css-v=3.3.5.css" rel="stylesheet">
    <link href="<?php echo ($smarty["const"]["CSS_URL"]); ?>font-awesome.min.css-v=4.4.0.css" rel="stylesheet">
    <link href="<?php echo ($smarty["const"]["CSS_URL"]); ?>plugins/iCheck/custom.css" rel="stylesheet">
    <link href="<?php echo ($smarty["const"]["CSS_URL"]); ?>plugins/morris/morris-0.4.3.min.css" rel="stylesheet">
    <link href="<?php echo ($smarty["const"]["CSS_URL"]); ?>animate.min.css" rel="stylesheet">
    <link href="<?php echo ($smarty["const"]["CSS_URL"]); ?>style.min.css-v=4.0.0.css" rel="stylesheet">
</head>

<body class="gray-bg">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-sm-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>配置新课</h5>
                    </div>
                    <div class="ibox-content">
                        <div class="row">
                            <div class="col-sm-12 b-r">
                                <form action="<?php echo ($smarty["const"]["/vdoado/index.php/Admin/Tch/new_lesson.html?v=4.0"]); ?>" method="post">
                                    <div class="form-group">
                                        <label>课程名称</label>
                                        <input type="test" placeholder="请输入课程名称" class="form-control" name="course_name" style="width:30%">
                                    </div>
                                    <div>
                                        <button class="btn btn-sm btn-primary pull-left m-t-n-xs" type="submit">
                                            <strong>下 一 步</strong>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <script src="<?php echo ($smarty["const"]["JS_URL"]); ?>jquery.min.js-v=2.1.4.js"></script>
    <script src="<?php echo ($smarty["const"]["JS_URL"]); ?>bootstrap.min.js-v=3.3.5.js"></script>
    <script src="<?php echo ($smarty["const"]["JS_URL"]); ?>content.min.js-v=1.0.0.js"></script>
    <script src="<?php echo ($smarty["const"]["JS_URL"]); ?>plugins/iCheck/icheck.min.js"></script>
</body>

</html>