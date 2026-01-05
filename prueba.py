class Vehicle:
    def __init__(self, seats, wheels, engine):
        self.seats = seats
        self.wheels = wheels
        self.engine = engine
porsche = Vehicle(2, 4, 'Gas')
# "Hi, I'm one of those Planets! Have a look at my moon."

class Planet:
    def __init__(self, moon):
        self.moon = moon

earth = Planet('moon')
# "Hi, I'm one of those Vehicles! Have a look at my engine, seats and wheels."

def show_me(instance):
    return f"Hi, I'm one of those {}s! Have a look at my {}."

print(show_me(earth))

porsche.__dir__

