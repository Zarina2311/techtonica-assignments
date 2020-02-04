class EventRecommender {
    constructor() {
        this.events = [];
        this.users = [];
    }

    addEvent(id, name, date, category) {
        let newEvent = new Event(id, name, date, category);
        this.events.push(newEvent);
    }

    addUser(id, name) {
        let newUser = new User(id, name);
        this.users.push(newUser);
    }

    saveUserEvent(user, event){
        user.personalEvents.push(event);
    }

    deleteUser(id) {
        let usersLeft = this.users.filter(function(user) {
            return user.id !== id; 
        });
        this.users = usersLeft;
    }
   
    deleteEvent(id) {
    // Deletes the Event from the system
        let eventsLeft = this.events.filter(function (event) {
            return event.id !==id; 
        });
            this.events = eventsLeft;
    }

    findEventsByDate(){
    // Returns all events on a given date

    }
    
    findEventsbyCategory(){
    // Returns all events in a given category
    
    }
}

class User {
    constructor(id, name) {
        this.name = name;
        this.id = id;
        this.personalEvents = [];
    }
}

class Event {
    constructor(id, name, date, category) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.category = category;
    }
}



