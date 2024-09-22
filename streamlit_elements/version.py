import os

def booleanize(s):
    return s.lower() in ['true', '1', "y", "yes"]

__version__ = "0.1.0"
__release__ = not booleanize(os.environ.get("DEBUG", False))
