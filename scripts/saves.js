function Reset(){
    window.localStorage.clear(),
    console.log('Deleted all saved Data!');
}
function Save() {
    window.localStorage.setItem('SpaceName', Space.Name),
    window.localStorage.setItem('SpaceTotal', Space.Total),
    window.localStorage.setItem('Space.Click', Space.Click),
    window.localStorage.setItem('SpaceSecond', Space.Second),
    window.localStorage.setItem('GrainName', Grain.Name),
    window.localStorage.setItem('GrainTotal', Grain.Total),
    window.localStorage.setItem('GrainClick', Grain.Click),
    window.localStorage.setItem('GrainSecond', Grain.Second),
    window.localStorage.setItem('WoodName', Wood.Name),
    window.localStorage.setItem('WoodTotal', Wood.Total),
    window.localStorage.setItem('WoodClick', Wood.Click),
    window.localStorage.setItem('WoodSecond', Wood.Second),
    window.localStorage.setItem('StoneName', Stone.Name),
    window.localStorage.setItem('StoneTotal', Stone.Total),
    window.localStorage.setItem('StoneClick', Stone.Click),
    window.localStorage.setItem('StoneSecond', Stone.Second),
    window.localStorage.setItem('CoalName', Coal.Name),
    window.localStorage.setItem('CoalTotal', Coal.Total),
    window.localStorage.setItem('CoalClick', Coal.Click),
    window.localStorage.setItem('CoalSecond', Coal.Second),
    window.localStorage.setItem('IronName', Iron.Name),
    window.localStorage.setItem('IronTotal', Iron.Total),
    window.localStorage.setItem('IronClick', Iron.Click),
    window.localStorage.setItem('IronSecond', Iron.Second)
    window.localStorage.setItem('GoldName', Gold.Name),
    window.localStorage.setItem('GoldTotal', Gold.Second),
    window.localStorage.setItem('GoldClick', Gold.Click),
    window.localStorage.setItem('GoldSecond', Gold.Second)
}
function Load() {
}
