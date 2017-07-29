var gulp 					 = require('gulp'), // Подключаем Gulp
		browserSync    = require('browser-sync');

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: '02 - JS and CSS Clock', // Директория для сервера - app
			index: "index-VAL.html"
		},
		notify: false,// Отключаем уведомления
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('**/*.css', browserSync.reload); // Наблюдение за css файлами в папке sass
	gulp.watch('**/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
});

gulp.task('default', ['watch']);