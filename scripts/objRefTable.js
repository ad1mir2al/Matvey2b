const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Physics,
		C3.Behaviors.bound,
		C3.Behaviors.Follow,
		C3.Plugins.TiledBg,
		C3.Plugins.Keyboard,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Physics.Acts.CreateRevoluteJoint,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Physics.Acts.ApplyTorque,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.AngleWithin,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Физика: 0},
	{ОграничитьСценой: 0},
	{СледоватьЗа: 0},
	{байкер: 0},
	{ТайловыйФон: 0},
	{передние_колесо: 0},
	{задние_колесо: 0},
	{Клавиатура: 0},
	{Спрайт: 0}
];

self.InstanceType = {
	байкер: class extends self.ISpriteInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	передние_колесо: class extends self.ISpriteInstance {},
	задние_колесо: class extends self.ISpriteInstance {},
	Клавиатура: class extends self.IInstance {},
	Спрайт: class extends self.ISpriteInstance {}
}