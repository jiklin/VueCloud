var gulp = require('gulp'),
//	图片压缩插件
	imagemin = require('gulp-imagemin'),
//	深度压缩png图片
	imageminPngquant = require('imagemin-pngquant'),
//	使用”gulp-cache”只压缩修改的图片
	cache = require('gulp-cache');
    
//图片压缩任务
gulp.task('imagemin', function() {
 	gulp.src('image/**/*.{png,jpg,gif,ico}')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [imageminPngquant()] 
        })))
        //图片压缩质量
    	.pipe(imageminPngquant({quality: '60-70', speed: 2})())
    	//覆盖到原来位置 并不提示覆盖
    	.pipe(gulp.dest('image'));
});
//复制任务
gulp.task('copy',function(){
	//复制vue相关依赖
	gulp.src(['node_modules/vue/dist/*.js'])
			    .pipe(gulp.dest('script/lib/vue'));

	//复制vue相关依赖
	gulp.src(['node_modules/vue-resource/dist/*.js'])
			    .pipe(gulp.dest('script/lib/vue-resource'));
	    	    
	//复制font-awesome相关依赖
	gulp.src(['node_modules/font-awesome/css*/*.min.*',
	'node_modules/font-awesome/fonts*/*'])
	    .pipe(gulp.dest('css/font-awesome'));
	    
	//复制requirejs
	gulp.src(['node_modules/requirejs/require.js'])
		.pipe(gulp.dest('script/lib/requirejs'));
		
	//复制zeptojs
	gulp.src(['node_modules/zepto/zepto.min.js'])
		.pipe(gulp.dest('script/lib/zepto'));
		
	//复制sha
	gulp.src(['node_modules/js-sha1/build/sha1.min.js'])
		.pipe(gulp.dest('script/lib/sha'));	
		
});